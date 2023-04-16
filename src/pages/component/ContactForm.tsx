import { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gray-800 px-6 py-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-100 mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-200 mb-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded py-2 px-3 mb-1 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}