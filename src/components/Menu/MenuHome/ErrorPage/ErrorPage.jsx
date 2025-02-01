import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[1120px] h-[322px] border-[1px] border-gray-600 border-dashed rounded p-[64px]">
        <p className="text-center text-gray400 font-medium text-2xl mb-2">
          404
        </p>
        <h2 className="text-center text-5xl text-white50 font-semibold mb-4">
          Page Not Found
        </h2>
        <p className="text-center text-base text-gray400">
          It looks like you've stumbled upon a page that doesn't exist.
        </p>
        <div className="w-full flex justify-center mt-8">
          <button className="w-[200px] h-[40px] rounded px-8 py-2 bg-white50 font-semibold">
            <Link to="/">Back To Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
