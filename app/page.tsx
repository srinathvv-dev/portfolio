import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Github, Mail, Camera } from "lucide-react";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
const socials = [
	{
		icon: <Camera size={20} />,
		href: "https://www.behance.net/srinathvallimanalan",
		label: "Behance",
		handle: "@srinathvallimanalan",
	},
  {
		icon: <Mail size={20} />,
		href: "mailto:srinathvv.dev@gmail.com",
		label: "Email",
		handle: "srinathvv.dev@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/srinathvv-dev",
		label: "Github",
		handle: "srinathvv-dev",
	},
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Srinath Vallimanalan
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <div className="flex flex-row items-center justify-center">
          <div className="p-4">
            <Github color="white" size={28}/>
          </div>
          <div className="p-4">
            <Camera color="white" size={28}/>
          </div>
          <div className="p-4">
            <Mail color="white" size={28}/>
          </div>
          
        </div>


        {/* {socials.map((s) => (
              <Link
              href={s.href}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
            >
              <span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
									
								</span>{" "}
								<div className="z-10 flex flex-col items-center"/>
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </Link>
                ))}
								
							
        </div> */}
        
        
        <h2 className="text-md text-zinc-100 ">
          "Designing everything but the kitchen sink – and if you need that sink designed, I've got you covered!" 
        </h2>
      </div>
    </div>
  );

}
