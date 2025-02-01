import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <div className="pb-[32px] mb-[32px] border-b-[1px] border-dashed border-gray-600">
        <h2 className="text-5xl font-semibold mb-[8px]">Contact Me</h2>
        <p className="max-w-[600px] text-gray-400">
          Feel free to reach out if you have a project idea, or any questions.
          You can use the form below for project inquiries.
        </p>
      </div>
      <div className="w-full flex">
        <div className="w-[628px] h-auto border-[1px] rounded-md  border-dashed border-gray-600 p-4">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <h4 className="text-2xl font-medium pb-4 mb-2">Project Inquiry</h4>
            <label htmlFor="name" className="text-xs">
              Name
            </label>
            <br />
            <input
              type="text"
              className="bg-black900 border  border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px]"
              {...register("name")}
            />
            <label htmlFor="email" className="text-xs">
              Email
            </label>
            <br />
            <input
              type="email"
              className="bg-black900 border  border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px]"
              {...register("email")}
            />
            <label htmlFor="website" className="text-xs">
              Existing website (optional)
            </label>
            <br />
            <input
              type="text"
              className="bg-black900 border  border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px] "
              {...register("website")}
            />
            <label htmlFor="details" className="text-xs">
              Project details
            </label>
            <br />
            <textarea
              name=""
              id=""
              className="mt-[10px] w-full h-[180px] rounded bg-black900 border border-gray600 mb-10 p-3"
              {...register("details")}
            ></textarea>
            <button className="w-full bg-white50 text-black950 px-2 py-3 rounded-md text-base font-semibold">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
