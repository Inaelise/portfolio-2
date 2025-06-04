import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className=" relative min-h-110 max-w-[550px] mx-auto mb-6">
        <div className="relative z-20 flex flex-col gap-1 text-center">
          <h1 className="font-second text-5xl">CodeByIna</h1>
          <p className="text-2xl">Welcome to my portfolio</p>
        </div>
        <img
          src="/images/b&w-profile.webp"
          alt="Woman smiling"
          className="w-80 top-10 drop-shadow-md absolute"
        />
      </div>
      <div className="px-4">
        <div className="sections">
          <MoveRight size={28} />
          <h2 className="section-h2">Who Am I?</h2>
        </div>
        <div className="flex flex-col gap-4 tracking-wide leading-7">
          <p>
            I'm Ina Elise and I'm an enthusiastic frontend developer based in
            Bergen, Norway. I've got a higher professional degree in the field,
            and I have a passion for creating modern and functional web
            applications. I love to learn new things and improve myself.
          </p>
          <p>
            I also have a bachelor's degree in archaeology but over the years I
            started developing an interest for programming, and so I wanted to
            "dig deeper" into it. That's how I ended up with another (totally
            different) degree, and what started as an interest has now become a
            love for the field.
          </p>
        </div>

        <div className="flex items-center gap-12 my-6">
          <a
            href="https://github.com/Inaelise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover animate"
            title="Go to GitHub profile"
          >
            <img src="/images/github-mark-white.png" className="w-[30px]" />
            <span className="font-medium">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ina-elise-flom-b55433311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover animate"
            title="Go to LinkedIn profile"
          >
            <span className="border-1 px-2 py-1 font-medium">LinkedIn</span>
          </a>
        </div>
        <div className="py-6">
          <h3 className="font-semibold underline underline-offset-3 mb-6">
            Core Skills:
          </h3>
          <ul className="grid grid-rows-3 grid-cols-3 gap-6">
            <li>
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/images/node-icon.png" className="w-[30px]" />
                <span>Node.js</span>
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                className="icon-list"
                title="Go to MDN web docs"
              >
                <img src="/images/html-icon.png" className="w-[30px]" />
                <span>HTML</span>
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                target="_blank"
                className="icon-list"
                title="Go to MDN web docs"
              >
                <img src="/images/css-icon.png" className="w-[30px]" />
                <span>CSS</span>
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/images/tailwind-icon.png" className="w-[30px]" />
                <span>TailwindCSS</span>
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                className="icon-list"
                title="Go to MDN web docs"
              >
                <img src="/images/js-icon.png" className="w-[30px]" />
                <span>JavaScript</span>
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/images/react-icon.png" className="w-[30px]" />
                <span>React</span>
              </a>
            </li>
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/vite.svg" className="w-[30px]" />
                <span>Vite</span>
              </a>
            </li>
            <li>
              <a
                href="https://git-scm.com/"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/images/git-icon.png" className="w-[30px]" />
                <span>Git</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                className="icon-list"
                title="Go to official website"
              >
                <img src="/images/github-mark-white.png" className="w-[30px]" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
