const Contact = () => {
  return (
    <div className="py-20">

      {/* HEADER */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Me</h1>
        <p className="text-gray-400">
          Have questions or want to connect? Send a message anytime.
        </p>
      </section>

      {/* CONTACT CONTAINER */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <form className="bg-white/5 border border-primary p-8 rounded-2xl space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl border border-primary outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl border border-primary outline-none focus:border-blue-500"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-xl border border-primary outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full text-white bg-primary py-3 rounded-xl hover:bg-second-primary transition"
          >
            Send Message
          </button>
        </form>

        {/* INFO */}
        <div className="bg-white/5 border border-primary p-8 rounded-2xl">

          <h2 className="text-2xl text-primary font-semibold mb-4">Get in Touch</h2>

          <p className="text-gray-400 mb-6">
            I usually respond within 24–48 hours. You can also reach me on social platforms.
          </p>

          <div className="space-y-3 text-gray-300">
            <p>📧 Email: nakib@example.com</p>
            <p>📍 Location: Bangladesh</p>
            <p>💬 Response Time: Fast</p>
          </div>

          {/* SOCIAL */}
          <div className="mt-6 flex gap-4">
            <a className="px-4 py-2 bg-primary rounded-lg hover:bg-second-primary">
              GitHub
            </a>
            <a className="px-4 py-2 bg-primary rounded-lg hover:bg-second-primary">
              LinkedIn
            </a>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;