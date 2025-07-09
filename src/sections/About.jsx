import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 relative overflow-hidden flex flex-col items-center">
          <div className="flex justify-center w-full">
            <img
              src="assets/ml-coding.png"
              alt="Magesh KB"
              className="object-contain rounded-full shadow-lg w-40 h-40 md:w-70 md:h-65 border-4 border-white mt-8 mb-4"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-4 md:gap-8 mb-4 px-2 md:px-8">
            <p className="headtext whitespace-nowrap">Hi, I&apos;m Magesh</p>
            <p className="subtext flex-1 max-w-2xl text-center md:text-left break-words">
              Third-year B.Tech Artificial Intelligence and Machine Learning student at Panimalar Engineering College, passionate about building AI-driven solutions. I&apos;ve completed multiple internships in UI/UX, AI development, and web technologies, gaining hands-on experience with real-world projects.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div className="z-10">
            <p className="headtext">My Skills</p>
            <p className="subtext">
              I&apos;m proficient in <b>Python</b>, <b>React</b>, <b>MediaPipe</b>, <b>OpenCV</b>, and <b>cloud platforms</b>. Certified in <b>Google Cloud</b>, <b>Azure</b>, and <b>Oracle Cloud</b>, I have hands-on experience in <b>AI/ML projects</b> and <b>web development</b>. I&apos;ve developed real-time pose estimation tools, fitness trackers, and full-stack web applications. With a strong foundation in both AI and modern web technologies, I&apos;m passionate about building scalable, innovative solutions that solve real-world problems and deliver meaningful user experiences.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location</p>
            <p className="subtext">
            Based in chennai , Tamil Nadu , India. Open to remote opportunities and internships worldwide. Eager to learn, collaborate, and contribute <br></br>to 
            cutting-edge tech <br></br> projects.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in AI/ML technologies, web development, and cloud platforms 
              that allow me to build intelligent and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
