import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPentagramFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M58.48 134.73 22.66 109A16 16 0 0 1 32 80h44.24ZM53.15 203A15.75 15.75 0 0 0 59 220.88a15.74 15.74 0 0 0 18.77 0l36.53-26.28-47.36-34.08Zm90.08-183.74a15.93 15.93 0 0 0-30.45-.05L98.25 64h59.5ZM162.94 80H93.06l-20.94 64.54L128 184.75l55.88-40.21Zm76.24 11.06A15.75 15.75 0 0 0 224 80h-44.24l17.76 54.74 35.85-25.8a15.74 15.74 0 0 0 5.81-17.89Zm-50.12 69.47L141.7 194.6l36.53 26.28A16 16 0 0 0 202.85 203Z" />
  </Svg>
);
const Memo = memo(SvgPentagramFill);
export default Memo;
