import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-5">
        {mySocials
          .sort((a, b) => {
            // Move GitHub right after Instagram
            if (a.name === "Instagram" && b.name === "GitHub") return -1;
            if (a.name === "GitHub" && b.name === "Instagram") return 1;
            return 0;
          })
          .map((social, index) => (
            <a href={social.href} key={index}>
              <img
                src={social.icon}
                className={
                  social.name === "GitHub"
                    ? "w-7 h-6"
                    : "w-5 h-5"
                }
                alt={social.name}
              />
            </a>
          ))}
      </div>
      <p>© 2025 Magesh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
