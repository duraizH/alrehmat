

const RoyalContact = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div style={{ color: "black" }}>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Contact Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have any questions or interested in learning more about our
                housing scheme? Fill out the form below, and one of our
                representatives will get in touch with you.
              </p>
            </div>
          </div>
          <div className="p-6 card  sm:p-8 md:p-10">
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    className="input w-full max-w-xs"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="input w-full max-w-xs"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="input w-full max-w-xs"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  id="message"
                  rows={5}
                  placeholder="How can we assist you?"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn px-6 hover:bg-primary/90 transition-colors hover:scale-105 duration-300 active:scale-95 active:transition-transform"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoyalContact