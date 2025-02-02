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
    <div>
      <div className="pb-8 mb-8 border-b border-dashed border-gray-600">
        <h2 className="text-5xl font-semibold mb-2">Contact Me</h2>
        <p className="max-w-[600px] text-gray-400">
          Feel free to reach out if you have a project idea, or any questions.
        </p>
      </div>
      <div className="w-full flex gap-x-8">
        <ContactForm onSuccess={() => setSuccessState(true)} />
        <div>
          <div className="mb-8">
            <h2 className="text-lg font-normal mb-2">Let's Connect</h2>
            <button className="  px-4 py-3 bg-white50 rounded-lg text-black950 font-semibold text-sm">
              <a
                className="flex items-center gap-x-2"
                href="mailto:morello.dev@gmail.com"
              >
                <MdOutlineMailOutline size={18} />
                morello.dev@gmail.com
              </a>
            </button>
          </div>

          <div>
            <h4 className="text-lg font-normal mb-4">Follow Me</h4>
            <div className="flex flex-col gap-2 w-[120px]">
              <button className="px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600">
                <a
                  className="flex items-center gap-x-2"
                  href="https://x.com/simeon_morello"
                  target="_blank"
                >
                  <RiTwitterXFill size={18} />
                  Twitter
                </a>
              </button>

              <button className="px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600">
                <a
                  className="flex items-center gap-x-2"
                  href="https://www.linkedin.com/in/sim%C3%A9on-morello-507b22335/"
                  target="_blank"
                >
                  <FaLinkedin size={18} />
                  Linkedin
                </a>
              </button>
              <button className="px-4 py-3 text-white50 border rounded-lg text-sm bg-black900 border-gray-600">
                <a
                  className="flex items-center gap-x-2"
                  href="https://www.instagram.com/simeon_morello/"
                  target="_blank"
                >
                  <FaInstagram size={18} />
                  Instagram
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {successState && <Notif />}
    </div>
  );
}
