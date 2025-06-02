export default function Footer() {
  return (
    <footer className="bg-[#151517] py-6 flex flex-col gap-10 items-center">
      <div className="flex items-center gap-10">
        <a
          href="https://github.com/Inaelise"
          className="flex items-center gap-2 hover animate"
        >
          <img src="/images/github-mark-white.png" className="w-[30px]" />
          <span className="font-medium">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ina-elise-flom-b55433311/"
          className="hover animate"
        >
          <span className="border-1 px-2 py-1 font-medium">LinkedIn</span>
        </a>
      </div>
      <p className="text-sm">Copyright © 2025 CodeByIna</p>
    </footer>
  );
}
