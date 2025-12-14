import { useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  // const form = formRef.current;

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    // Web3Forms access key
    formData.append("access_key", "136ee74c-9195-4859-b7bb-4f58881adddf");

    // Create professional HTML email

    // Add formatted HTML email

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    setStatus(result.message);

    if (result.success) {
      formRef.current.reset();
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center py-20 ">
      <h1
        className="
      text-5xl font-semibold text-white 
      relative 
      drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]
      after:content-['']
      after:absolute after:inset-0
      after:-z-10
      after:blur-2xl
      after:bg-[radial-gradient(circle,rgba(150,80,255,0.6)_0%,transparent_70%)] mb-2"
      >
        Let&apos;s Connect
      </h1>
      <p className="text-xl mb-10">
        Let&apos;s build something amazing together — send me a message.
      </p>
      {status && (
        <p className="text-center text-sm text-white/80 mt-4">{status}</p>
      )}
      <form ref={formRef} onSubmit={sendEmail} className="w-1/2">
        <div className="backdrop-blur-sm bg-black/30 flex flex-col gap-5 items-center justify-center rounded-lg w-full py-5">
          {/* Hidden recipient fields */}{" "}
          <input type="text" name="recipient_name" defaultValue="" hidden />
          <input type="email" name="recipient_email" defaultValue="" hidden />
          <div className="flex flex-row gap-10 w-3/4">
            <span className="flex flex-col w-1/2">
              {" "}
              <label>Your Name</label>
              <input
                type="text"
                name="user_name"
                className="bg-gray-100/20 backdrop-blur-sm rounded-lg px-4 w-full py-2"
                placeholder="Enter Your Name"
                required
              />{" "}
            </span>
            <span className="flex flex-col w-1/2">
              {" "}
              <label>Your Email</label>{" "}
              <input
                type="email"
                name="user_email"
                className="bg-gray-100/20 backdrop-blur-sm rounded-lg px-4 w-full py-2"
                placeholder="Enter Your Email"
                required
              />{" "}
            </span>{" "}
          </div>
          <span className="flex flex-col w-3/4">
            {" "}
            <label>Message</label>{" "}
            <textarea
              name="message"
              className="bg-gray-100/20 backdrop-blur-sm rounded-lg px-4 w-full h-50 py-2"
              placeholder="Enter your message"
              required
            />{" "}
          </span>
          <button
            type="submit"
            className="w-3/4 py-2 rounded-lg flex justify-center items-center gap-3 bg-gradient-to-r from-purple-500 to-blue-800 shadow-lg hover:scale-105 transition"
          >
            {" "}
            <span className="text-xl font-[450]">Send Message</span>{" "}
          </button>{" "}
        </div>{" "}
      </form>

      <div className="flex gap-5 text-white text-3xl mt-10">
        <a
          href="https://www.linkedin.com/in/surya-chandrasekar-b53670298/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-black transition" />
        </a>

        <a href="https://github.com/Suryaprabha1030" target="_blank">
          <FaGithub className="hover:text-black transition" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
