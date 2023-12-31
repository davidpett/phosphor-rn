import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPentagramBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243 89.83A19.94 19.94 0 0 0 224 76h-58.15l-18.8-57.95A19.93 19.93 0 0 0 109 18L90.15 76H32a20 20 0 0 0-11.7 36.22l47.1 33.89-18.07 55.7a20 20 0 0 0 30.74 22.39L128 189.71l47.89 34.45a20 20 0 0 0 30.78-22.35l-18.07-55.7 47.15-33.92A20 20 0 0 0 243 89.83ZM128 37.11 140.62 76h-25.24ZM44.42 100h37.94l-7.18 22.13Zm31.51 97.6 11.93-36.78 19.59 14.1Zm19.71-60.75 12-36.85h40.82l12 36.85L128 160.14Zm52.91 38.07 19.59-14.1 11.93 36.78Zm32.27-52.79L173.64 100h37.94Z" />
  </Svg>
);
const Memo = memo(SvgPentagramBold);
export default Memo;
