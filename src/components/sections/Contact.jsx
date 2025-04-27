import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser"; 
import Swal from "sweetalert2";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Thank you for contacting me. I will get back to you soon!',
            timer: 3000,
            showConfirmButton: false,
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later!',
            timer: 3000,
            showConfirmButton: false,
          });
          console.log(error.text);
        }
      );
  };
  

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="w-full lg:w-[600px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-[#e29578] leading-right">
            Get in touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                name="name"
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/60 border border-[#e29578] rounded px-4 py-3 text-[#006d77] transition focus:outline-none focus:border-[#006d77] focus:bg-[#fff] focus:text-[#006d77]"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                name="email"
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/60 border border-[#e29578] rounded px-4 py-3 text-[#006d77] transition focus:outline-none focus:border-[#006d77] focus:bg-[#fff] focus:text-[#006d77]"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="relative">
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-white/60 border border-[#e29578] rounded px-4 py-3 text-[#006d77] transition focus:outline-none focus:border-[#006d77] focus:bg-[#fff] focus:text-[#006d77]"
                placeholder="Your Message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#006d77] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,146,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
