import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BiMapPin} from "react-icons/bi"
import { BsArrowLeft } from "react-icons/bs";
import { MdMail, MdPhone, } from "react-icons/md"


const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Contact card containing details and the message form. */}
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8
      border rounded-xl border-gray-700/50 p-5 sm:p-10
      backdrop-blur-xl bg-black/80">
        {/* Back navigation to the home page. */}
        <Link href='/'>
        <Button variant='ghost' className="hover:bg-black
         hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
          Back <BsArrowLeft className="ml-2" />
        </Button>
        </Link>

        {/* Intro text and contact methods. */}
        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          via-sky-300 to-blue-500">Get In Touch</h1>

          <div className="space-y-6">
            <p className="text-pretty text-neutral-200 tracking-tight">
              I am always open to discussing new projects, creative ideas 
              or opportunities to be part of your vision. Feel free to reach 
              out to me through any of the following channels:
            </p>

            {/* Direct contact cards. */}
            <div className="space-y-4">

                <div className="flex items-center gap-3 p-4 rounded-lg
                border border-gray-700/50 bg-black/40">
                  <MdMail className="w-5 h-5 text-emerald-400"/>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:emperor2g@yahoo.com" className="text-neutral-500 hover:text-emerald-400
                    transition-colors">emperor2g@yahoo.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg
                border border-gray-700/50 bg-black/40">
                  <MdPhone className="w-5 h-5 text-emerald-400"/>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:08124206919" className="text-neutral-500 hover:text-emerald-400
                    transition-colors">08124206919</a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-lg
                border border-gray-700/50 bg-black/40">
                  <BiMapPin className="w-5 h-5 text-emerald-400"/>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-neutral-500 hover:text-emerald-400
                    transition-colors">Lagos, Lagos Nigeria</p>
                  </div>
                </div>
            </div>
            {/* Message form. */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Send Me a Message</h2>
            
            <form action="#" className="space-y-4">
              {/* Name field. */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full p-2 rounded-lg
                flex items-center gap-3 border border-gray-700 bg-black/40 focus:outline-none
                focus:ring-2 focus:ring-emerald-500 transition-all duration-300"/>
              </div>

              {/* Email field. */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full p-2 rounded-lg
                flex items-center gap-3 border border-gray-700 bg-black/40 focus:outline-none
                focus:ring-2 focus:ring-emerald-500 transition-all duration-300"/>
              </div>

              {/* Message field. */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-2 rounded-lg border border-gray-700 bg-black/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                ></textarea>
              </div>

              {/* Submit button. */}
              <Button className="w-full text-black bg-emerald-400
              hover:bg-emerald-500">Send Message</Button>
            </form>
            </div>
          </div>
        </div>

      </main>

    </div>
  )
}

export default page