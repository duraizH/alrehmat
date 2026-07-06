import ContactForm from '../Components/ContactForm/ContactForm'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Al-Rehmat Developers</title>
        <meta name="description" content="Get in touch with Al-Rehmat Developers for inquiries about our real estate projects, booking details, and construction services." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/contact" />
        <meta property="og:title" content="Contact Us | Al-Rehmat Developers" />
        <meta property="og:description" content="Get in touch with Al-Rehmat Developers for inquiries about our real estate projects, booking details, and construction services." />
        <meta property="og:url" content="https://alrehmatdevelopers.com/contact" />
      </Helmet>
      <ContactForm/>
    </>
  )
}
export default Contact;