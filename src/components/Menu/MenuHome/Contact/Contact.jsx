import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import ContactForm from "./form/ContactForm";
import Notif from "./popup/Notif";

export default function Contact() {
  const [successState, setSuccessState] = useState(false);

  useEffect(() => {
    if (successState) {
      const timer = setTimeout(() => setSuccessState(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [successState]);

  return (
    <div className="w-full bg-black99 px-4 sm:px-6 md:px-8 lg:px-16 pt-16 lg:pt-8 pb-8 sm:pb-16">
      <div className="w-full max-w-[1200px] mx-auto text-white50">
        <div className="border-b border-dashed border-gray-600 pb-8 sm:pb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            Contact Me
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl">
            Feel free to reach out if you have a project idea, or any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 sm:py-12">
          <div className="lg:col-span-2">
            <ContactForm onSuccess={() => setSuccessState(true)} />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg sm:text-xl font-medium">
                Let&apos;s Connect
              </h2>
              <a href="mailto:morello.dev@gmail.com" className="block w-full">
                <button className="w-full transition-colors duration-200 hover:bg-white40 px-4 py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm flex items-center justify-center gap-x-3">
                  <MdOutlineMailOutline className="text-xl" />
                  <span>morello.dev@gmail.com</span>
                </button>
              </a>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-medium">Follow Me</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://x.com/simeon_morello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full transition-colors duration-200 hover:bg-black800 px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600 flex items-center gap-x-3">
                    <RiTwitterXFill className="text-xl" />
                    <span>Twitter</span>
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/in/sim%C3%A9on-morello-507b22335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full transition-colors duration-200 hover:bg-black800 px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600 flex items-center gap-x-3">
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </button>
                </a>

                <a
                  href="https://www.instagram.com/simeon_morello/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full transition-colors duration-200 hover:bg-black800 px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600 flex items-center gap-x-3">
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {successState && <Notif />}
      </div>
    </div>
  );
}
