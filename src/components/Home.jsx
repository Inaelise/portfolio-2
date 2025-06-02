import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="min-h-110 max-w-[550px] mx-auto mb-6">
        <div className="relative z-20 flex flex-col gap-1 text-center">
          <h1 className="font-second text-5xl">CodeByIna</h1>
          <p className="text-2xl">Welcome to my portfolio</p>
        </div>
        <img
          src="/images/b&w-profile.webp"
          alt="Woman smiling"
          className="w-80 top-36 drop-shadow-md absolute"
        />
      </div>
      <div className="px-4">
        <div className="sections">
          <MoveRight />
          <h2 className="section-h2">Who Am I?</h2>
        </div>
        <p>
          I'm Ina and I'm an aspiring frontend developer who's got a higher
          professional degree in the field. I have a passion for creating
          beautiful and functional web applications.
        </p>
        <div className="flex items-center gap-12 my-6">
          <a
            href="https://github.com/Inaelise"
            className="flex items-center gap-2 hover:scale-106 hover:drop-shadow-2xl animate"
          >
            <img src="/images/github-mark-white.png" className="w-[30px]" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ina-elise-flom-b55433311/"
            className="hover:scale-106 hover:drop-shadow-2xl animate"
          >
            <span className="border-1 px-2 py-1 font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </>
  );
}
