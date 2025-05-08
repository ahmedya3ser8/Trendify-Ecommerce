
export default function ContactMe() {
  return (
    <section className="contact py-10 md:py-16">
      <div className="container">
        <h2 className="text-text font-semibold text-4xl mb-2 dark:text-white">Contact me</h2>
        <p className="text-gray-400 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sequi ad unde.</p>
        <form className="mt-5 w-full md:w-[70%]">
          <div className="col flex items-center gap-6 mb-5">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block mb-2 font-semibold text-text dark:text-gray-100">First name</label>
              <input type="text" id="firstName" placeholder="username" className="w-full h-[40px] p-2 text-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:bg-[#1e1e1e] rounded-md outline-none border border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100" />
            </div>
            <div className="w-1/2">
              <label htmlFor="lastName" className="block mb-2 font-semibold text-text dark:text-gray-100">Last name</label>
              <input type="text" id="lastName" placeholder="lastName" className="w-full h-[40px] p-2 text-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:bg-[#1e1e1e] rounded-md outline-none border border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100" />
            </div>
          </div>
          <div className="col flex items-center gap-6 mb-5">
            <div className="w-1/2">
              <label htmlFor="email" className="block mb-2 font-semibold text-text dark:text-gray-100">Email</label>
              <input type="email" id="email" placeholder="exapmle@exapmle.com" className="w-full h-[40px] p-2 text-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:bg-[#1e1e1e] rounded-md outline-none border border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100" />
            </div>
            <div className="w-1/2">
              <label htmlFor="phoneNumber" className="block mb-2 font-semibold text-text dark:text-gray-100">Phone number</label>
              <input type="tel" id="phoneNumber" placeholder="01123456789" className="w-full h-[40px] p-2 text-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:bg-[#1e1e1e] rounded-md outline-none border border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100" />
            </div>
          </div>
          <div className="mb-5">
            <label htmlFor="topic" className="block mb-2 font-semibold text-text dark:text-gray-100">Choose a topic</label>
            <select id="topic" className="w-full h-[40px] p-2 text-gray-400 dark:text-gray-100 dark:placeholder-gray-400 dark:bg-[#1e1e1e] rounded-md outline-none border border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100">
              <option value="0">select one</option>
              <option value="1">select two</option>
              <option value="2">select three</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 font-semibold text-text dark:text-gray-100">Message</label>
            <textarea id="message" className="w-full h-40 p-2 text-gray-400 dark:text-gray-100 resize-none rounded-md outline-none border dark:placeholder-gray-400 border-primary dark:border-gray-100 focus:ring-0 focus:shadow-none focus:border-primary dark:focus:border-gray-100 dark:bg-[#1e1e1e]" placeholder="Type your message..."></textarea>
          </div>
          <div className="mb-5 flex items-center gap-2">
            <input id="accept" type="checkbox" className="size-5 accent-primary border border-primary outline-none checked:text-primary focus:ring-0 focus:shadow-none focus:border-primary" />
            <label htmlFor="accept" className="text-gray-400 dark:text-gray-100 text-lg">i accept the terms</label>
          </div>
          <button type="submit" className="w-[40%] md:w-1/5 py-2 px-5 bg-primary text-white rounded-3xl">sumbit</button>
        </form>
      </div>
    </section>
  )
}
