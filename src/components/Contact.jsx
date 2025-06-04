import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");
    const formData = new FormData(e.target);

    formData.append("access-key", "b208eb7c-f9ff-4874-a36a-3201d3f31ac5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="sections">
        <MoveRight size={28} />
        <h2 className="section-h2">Contact</h2>
      </div>
      <form onSubmit={onSubmit} className="flex flex-col gap-12 mt-10 mb-20">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="form-input"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          className="form-input"
        ></textarea>

        <button
          type="submit"
          className="relative inline-block px-4 py-2 font-medium group w-[170px] cursor-pointer mx-auto"
        >
          <span class="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-dark border-1 border-white group-hover:bg-white"></span>
          <span class="relative text-white group-hover:text-dark">Send</span>
        </button>
      </form>
      <span>{result}</span>
    </>
  );
}
