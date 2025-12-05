import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const RoyalContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [sending, setSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSubmitMessage("");

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitMessage("Please fill in all fields");
      setSending(false);
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitMessage("Please enter a valid email address");
      setSending(false);
      return;
    }

    // Validate phone (basic validation)
    const phoneRegex = /^[0-9+\-\s()]+$/;
    if (!phoneRegex.test(formData.phone)) {
      setSubmitMessage("Please enter a valid phone number");
      setSending(false);
      return;
    }

    try {
      // Prepare data for email template
      const templateData = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        project: "Royal Residencia"
      };

      // Send email using emailjs
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSubmitMessage("✓ Message sent successfully! We'll contact you soon.");
            setFormData({ name: "", email: "", phone: "", message: "" });
            setSending(false);
            // Clear message after 5 seconds
            setTimeout(() => setSubmitMessage(""), 5000);
          },
          (error) => {
            console.error("Email error:", error);
            setSubmitMessage("Failed to send message. Please try again.");
            setSending(false);
          }
        );
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage("An error occurred. Please try again later.");
      setSending(false);
    }
  };

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
          <div className="p-6 card sm:p-8 md:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    className="input w-full max-w-xs"
                    value={formData.name}
                    onChange={handleChange}
                    required
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
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              {submitMessage && (
                <div className={`p-3 rounded-md text-sm ${
                  submitMessage.includes("✓") 
                    ? "bg-green-100 text-green-800" 
                    : "bg-red-100 text-red-800"
                }`}>
                  {submitMessage}
                </div>
              )}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={sending}
                  className="btn px-6 hover:bg-primary/90 transition-colors hover:scale-105 duration-300 active:scale-95 active:transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoyalContact;