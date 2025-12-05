
import { Helmet } from 'react-helmet';
import ContactForm from '../Components/ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Al-Rehmat Developers - Premium Housing Projects</title>
        <meta name="description" content="Get in touch with Al-Rehmat Developers. Contact our team about Meriton and Royal Residencia luxury housing projects in Lahore, Pakistan." />
        <meta property="og:title" content="Contact Al-Rehmat Developers" />
        <meta property="og:description" content="Reach out to Al-Rehmat Developers for luxury residential projects in Lahore." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alrehmatdevelopers.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Al-Rehmat Developers" />
        <meta name="twitter:description" content="Get in touch with Al-Rehmat Developers for premium housing projects." />
        <link rel="canonical" href="https://alrehmatdevelopers.com/contact" />
      </Helmet>
      <ContactForm/>
    </>
  )
}
export default Contact;