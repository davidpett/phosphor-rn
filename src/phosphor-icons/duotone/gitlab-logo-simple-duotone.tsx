import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitlabLogoSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m203.52 171.52-73.26 51.76a3.91 3.91 0 0 1-4.52 0l-73.26-51.76a49 49 0 0 1-18.87-52.4L53.5 43a3.93 3.93 0 0 1 7.5-.38L80.65 96h94.7L195 42.62a3.93 3.93 0 0 1 7.53.38l19.89 76.12a49 49 0 0 1-18.9 52.4Z"
      opacity={0.2}
    />
    <Path d="M230.15 117.1 210.25 41a11.94 11.94 0 0 0-22.79-1.11L169.78 88H86.22L68.54 39.87A11.94 11.94 0 0 0 45.75 41l-19.9 76.1a57.19 57.19 0 0 0 22 61l73.27 51.76a11.91 11.91 0 0 0 13.74 0l73.27-51.76a57.19 57.19 0 0 0 22.02-61ZM198.91 165 128 215.09 57.09 165a41.1 41.1 0 0 1-15.75-43.84L58 57.5l15.13 41.26a8 8 0 0 0 7.51 5.24h94.72a8 8 0 0 0 7.51-5.24L198 57.5l16.63 63.65A41.1 41.1 0 0 1 198.91 165Z" />
  </Svg>
);
const Memo = memo(SvgGitlabLogoSimpleDuotone);
export default Memo;
