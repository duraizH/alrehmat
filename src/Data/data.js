import image1 from '../assets/projectslidemain.webp'
import image2 from '../assets/projectslide1.webp'
import image3 from '../assets/projectslide2.webp'
import image4 from '../assets/projectslide3.webp'
import image5 from '../assets/projectslide4.webp'
import image6 from '../assets/projectslide5.webp'

export const images = [image1, image2, image3, image4, image5, image6]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
