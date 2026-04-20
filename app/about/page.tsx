import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* About page content card. */}
      <main className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8
      border rounded-xl border-gray-700/50 p-5 sm:p-10
      backdrop-blur-xl bg-black/80">

        {/* Back navigation to the home page. */}
        <Link href='/'>
        <Button variant="ghost" className="hover:bg-black
        hover:text-white rounded-full duration-300 mb-5 cursor-pointer">
          Back <BsArrowLeft className="ml-2"/>
        </Button>
        </Link>

        {/* Intro and biography copy. */}
        <div className="space-y-6">
          <h1 className="text-4xl bg-clip-text font-bold
          text-transparent bg-gradient-to-r from-emerald-400
          via-sky-300 to-blue-500">
            About Me
          </h1>
          <div className="space-y-4 text-neutral-200 text-pretty
          tracking-tight">
            <p>I am James Bisiriyu, a passionate Junior Web Developer with a couple of years of experience 
              in creating beautiful and functional web applications. My journey in web development began in 2024
              and since then, I have been dedicated to crafting exceptional digital experiences.</p>
            <p>I have worked with various technologies and frameworks to bring ideas to life, always staying 
              at the forefront of web development trends. I specialize in building responsive, accessible 
              and performant web applications that not only look great, but also provide an excellent
              user experience.
            </p>
          </div>

          {/* Education timeline. */}
          <div className="space-y-4">
  <h2 className="text-2xl bg-clip-text font-bold text-transparent bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500">
    Education
  </h2>
  
  <div className="space-y-4">
    {/* Diploma in Full Stack Engineer */}
    <div className="space-y-1">
      <p className="font-medium">Diploma in Full Stack Engineer</p>
      <p className="text-neutral-400 text-sm">Gomycode Lagos Nigeria</p>
    </div>
    
    {/* React (WEB 2) in Software Development */}
    <div className="space-y-1">
      <p className="font-medium">React (WEB 2) in Software Development</p>
      <p className="text-neutral-400 text-sm">Gomycode Lagos Nigeria</p>
    </div>
    
    {/* WEB 1 in Software Development */}
    <div className="space-y-1">
      <p className="font-medium">WEB 1 in Software Development</p>
      <p className="text-neutral-400 text-sm">Gomycode Lagos Nigeria</p>
    </div>
    
    {/* Diploma in Software Development */}
    <div className="space-y-1">
      <p className="font-medium">Diploma in Software Development</p>
      <p className="text-neutral-400 text-sm">Newham College, London</p>
    </div>
  </div>
</div>
        </div>

      </main>
    </div>
  )
}

export default page