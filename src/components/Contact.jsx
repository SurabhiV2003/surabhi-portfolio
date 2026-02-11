import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm('service_vbgfkyj', 'template_9vf5dqv', form.current, '0xiukCoJfn5W8XqKx')
      .then(() => {
        setStatus("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        setStatus("Failed to send. Please try again.");
      });
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
        <p className="text-slate-400 mb-8">Open to collaborations, opportunities, and meaningful conversations.</p>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="user_name" placeholder="Name" required 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            <input type="email" name="user_email" placeholder="Email" required 
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <textarea name="message" placeholder="Your Message" rows="5" required
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
          
          <button type="submit" 
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-blue-500/20 active:scale-95">
            Send Message
          </button>
          
          {status && <p className="text-center text-sm text-blue-400 mt-4">{status}</p>}
        </form>
      </div>
    </section>
  );
}