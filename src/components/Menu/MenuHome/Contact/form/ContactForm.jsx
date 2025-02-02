import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm({ onSuccess }) {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b734e8d2-e33b-4d85-ac78-75f18af27688",
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        onSuccess();
        reset();
      }
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[628px] h-auto border-[1px] rounded-md border-dashed border-gray-600 p-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4 className="text-2xl font-medium pb-4 mb-2">Project Inquiry</h4>
        <label htmlFor="name" className="text-xs">
          Name
        </label>
        <br />
        <input
          type="text"
          className="bg-black900 border border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px]"
          {...register("name", { required: true })}
        />
        <label htmlFor="email" className="text-xs">
          Email
        </label>
        <br />
        <input
          type="email"
          className="bg-black900 border border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px]"
          {...register("email", { required: true })}
        />
        <label htmlFor="website" className="text-xs">
          Existing website (optional)
        </label>
        <br />
        <input
          type="text"
          className="bg-black900 border border-gray600 rounded-md p-3 text-sm h-10 w-[596px] mt-[10px] mb-[10px]"
          {...register("website")}
        />
        <label htmlFor="details" className="text-xs">
          Project details
        </label>
        <br />
        <textarea
          className="mt-[10px] w-full h-[180px] rounded bg-black900 border border-gray600 mb-10 p-3"
          {...register("details", { required: true })}
        ></textarea>
        <button
          type="submit"
          className={`w-full bg-white50 text-black950 px-2 py-3 rounded-md text-base font-semibold ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Inquiry"}
        </button>
      </form>
    </div>
  );
}
