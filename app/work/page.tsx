import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import projectsData from "../data/projects.json";
import { BiLogoGithub } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";


type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const page = () => {
  const { projects } = projectsData as { projects: Project[] };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Work page container. */}
      <main className="max-w-4xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        {/* Heading row with back navigation. */}
        <div className="relative flex justify-center">
          <Link href="/">
            <Button
              variant="ghost"
              className="hover:bg-black absolute left-0 hover:text-white rounded-full duration-300 mb-5 cursor-pointer"
            >
              Back <BsArrowLeft className="ml-2" />
            </Button>
          </Link>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300 h-14 mt-14 sm:mt-0">
            My Work
          </h1>
        </div>
        {/* Responsive project grid sourced from JSON. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: Project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-lg border hover:scale-105 border-neutral-800/70 bg-black/50 transition-all duration-300"
            >
              {/* Project preview image. */}
              <div className="relative w-full h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-2">{project.description}</p>
                {/* Technology tags for each project. */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-emerald-700/40 px-2 py-1 rounded text-emerald-200">
                      {tag}
                    </span>
                  ))}
                </div>

                  {/* Placeholder actions until real repo/demo URLs exist. */}
                  <div className="flex gap-3">
                    <Button
                      variant='outline'
                      disabled
                      aria-disabled="true"
                      className="flex-1 text-white bg-black backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear"
                    >
                      <BiLogoGithub className="h-4 w-4 mr-2"/>
                      Code unavailable
                    </Button>
                    <Button
                      variant='ghost'
                      disabled
                      aria-disabled="true"
                      className="flex-1 text-gray-300 backdrop-blur-sm border-neutral-800/70 transition-colors duration-200 ease-linear"
                    >
                      <CgExternal className='mr-2 h-4 w-4' />
                      Live demo unavailable
                    </Button>
                  </div>

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;