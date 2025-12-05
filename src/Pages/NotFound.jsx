import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Al-Rehmat Developers</title>
        <meta name="description" content="The page you're looking for could not be found. Return to Al-Rehmat Developers home page." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-[#CBA664] mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#CBA664] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b08d55] transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
