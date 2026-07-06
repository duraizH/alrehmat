import { useEffect, useState } from "react"
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf"
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url"
import Loader from "../Loader/Loader"

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl
const pdfUrl = new URL("../../assets/royal-residencia/Al-Rehmat-Residencia.pdf", import.meta.url).href

const RoyalHero = () => {
	const [pageImages, setPageImages] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		let canceled = false

		const loadPdf = async () => {
			try {
				const loadingTask = pdfjsLib.getDocument(pdfUrl)
				const pdf = await loadingTask.promise
				const pages = []

				for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
					if (canceled) return
					const page = await pdf.getPage(pageNum)
					const viewport = page.getViewport({ scale: 1.2 })
					const canvas = document.createElement("canvas")
					const context = canvas.getContext("2d")
					canvas.width = Math.floor(viewport.width)
					canvas.height = Math.floor(viewport.height)

					await page.render({ canvasContext: context, viewport }).promise
					const dataUrl = canvas.toDataURL("image/jpeg", 0.8)

					pages.push({
						src: dataUrl,
						pageNumber: pageNum,
						width: canvas.width,
						height: canvas.height,
					})

					if (!canceled) {
						setPageImages([...pages])
					}
				}

				if (!canceled) setLoading(false)
			} catch (err) {
				if (!canceled) {
					setError(err?.message || "Unable to load PDF document")
					setLoading(false)
				}
			}
		}

		loadPdf()

		return () => {
			canceled = true
		}
	}, [])

	return (
		<section className="w-full flex justify-center md:pt-24 lg:pt-32 pt-[6rem]">
			<div className="container space-y-10 xl:space-y-16 px-4 sm:px-6">
				{loading && (
					<Loader/>
				)}
				{error && (
					<div className="text-center text-sm text-red-600">{error}</div>
				)}
				<div className="flex flex-col items-center justify-evenly">
					{pageImages.map((page, index) => (
						<div
							key={page.pageNumber}
							className="animate-fade-up animate-once animate-ease-in animate-fill-forwards"
						>
							<img
								src={page.src}
								alt={`Royal Residence page ${page.pageNumber}`}
								className="mx-auto w-full max-w-6xl overflow-hidden rounded-t-xl object-contain"
								loading={index === 0 ? "eager" : "lazy"}
								decoding="async"
								width={page.width}
								height={page.height}
							/> 
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default RoyalHero
