import { MoveRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    if (result || error) {
      const timer = setTimeout(() => {
        setResult("");
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [result, error]);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("access_key", "b208eb7c-f9ff-4874-a36a-3201d3f31ac5");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resData = await response.json();

      if (resData.success) {
        setError("");
        setResult("✅ Your message has been sent!");
        reset();
      } else {
        setResult("");
        setError(
          `${resData.message || "❌ Failed sending message. Please try again."}`
        );
      }
    } catch {
      setResult("");
      setError("❌ Network error. Please check your connection.");
    }
  };

  return (
    <>
      <div className="sections">
        <MoveRight size={28} />
        <h2 className="section-h2">Contact</h2>
      </div>
      <div className="flex flex-col gap-2 items-center my-2 mt-10 text-sm sm:text-base">
        <Mail size={36} strokeWidth={1} />
        <p>Want to get in touch?</p>
        <p>Fill out the form to send me a message.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-12 mt-10 mb-20"
      >
        <input
          type="text"
          placeholder="Your name"
          className="form-input"
          {...register("name", { required: "Please fill out your name" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          type="email"
          placeholder="Your email"
          className="form-input"
          {...register("email", {
            required: "Please fill out your email",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <textarea
          placeholder="Your message"
          className="form-input"
          {...register("message", { required: "Please write a message" })}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative inline-block px-4 py-2 font-medium group w-[170px] cursor-pointer mx-auto"
        >
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-dark border-1 border-white group-hover:bg-white"></span>
          <span className="relative text-white group-hover:text-dark">
            {isSubmitting ? "Sending..." : "Send"}
          </span>
        </button>
        {error && <p className="text-center text-red-500">{error}</p>}
        {result && <p className="text-center text-green-500">{result}</p>}
      </form>
    </>
  );
}
