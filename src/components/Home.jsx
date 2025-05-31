import { MoveRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <div>
        <h1>CodeByIna</h1>
        <p>Welcome to my portfolio</p>
        <img
          src="/images/b&w-profile.webp"
          alt="Woman smiling"
          className="w-80 drop-shadow-md"
        />
      </div>
      <div>
        <div>
          <MoveRight />
          <h2>Who am I?</h2>
        </div>
        <p>
          I'm Ina and I'm an aspiring frontend developer who's got a higher
          professional degree in the field. I have a passion for creating
          beautiful and functional web applications.
        </p>
        <div>
          <a href="https://github.com/Inaelise">
            <img src="/images/github-mark.png" />
          </a>
          <a href="https://www.linkedin.com/in/ina-elise-flom-b55433311/">
            <span>in</span>
          </a>
        </div>
      </div>
    </>
  );
}
