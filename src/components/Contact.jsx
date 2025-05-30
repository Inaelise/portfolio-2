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
      <div>
        <MoveRight />
        <h2>Contact</h2>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message" required></textarea>

        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </>
  );
}
