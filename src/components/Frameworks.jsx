import { OrbitingCircles } from "./OrbitingCircles";
import PropTypes from "prop-types";

// Dynamically import all logo files from public/assets/logos-tech-stack
const logoFiles = import.meta.glob('/public/assets/logos-tech-stack/*.{svg,png,jpg,jpeg}', {eager: true, import: 'default'});

const allIcons = Object.keys(logoFiles).map((path) => path.replace('/public/assets/logos-tech-stack/', ''));
// Use all icons from the folder, in the order returned by the filesystem
const orderedIcons = allIcons;

// Offset the second ring by half the length to avoid adjacency
function getOffsetArray(arr, offset) {
  return arr.slice(offset).concat(arr.slice(0, offset));
}
const offset = Math.floor(orderedIcons.length / 2);
const secondRingIcons = getOffsetArray(orderedIcons, offset);

export function Frameworks() {
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} duration={8} speed={2}>
        {orderedIcons.map((src, index) => (
          <Icon key={index} src={`/assets/logos-tech-stack/${src}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse duration={8} speed={2}>
        {secondRingIcons.map((src, index) => (
          <Icon key={index} src={`/assets/logos-tech-stack/${src}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img
    src={src}
    className={
      src.includes("figma.png")
        ? "duration-300 rounded-sm hover:scale-110 object-contain w-28 h-28"
        : "duration-300 rounded-sm hover:scale-110 object-contain w-20 h-20"
    }
    alt=""
  />
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};
