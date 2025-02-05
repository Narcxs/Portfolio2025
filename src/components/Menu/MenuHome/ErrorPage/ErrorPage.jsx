import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto border border-gray-600 border-dashed rounded p-4 sm:p-8 lg:p-16">
        <p className="text-center text-gray400 font-medium text-xl sm:text-2xl mb-2">
          404
        </p>
        <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-white50 font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-center text-sm sm:text-base text-gray400">
          It looks like you&apos;ve stumbled upon a page that doesn&apos;t
          exist.
        </p>
        <div className="w-full flex justify-center mt-6 sm:mt-8">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 bg-white50 rounded font-semibold text-sm sm:text-base">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
