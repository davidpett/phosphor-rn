import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGavelBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m246.14 113.86-16-16a20 20 0 0 0-23.06-3.75l-45.2-45.2a20 20 0 0 0-3.74-23.06l-16-16a20 20 0 0 0-28.28 0l-64 64a20 20 0 0 0 0 28.28l16 16a20 20 0 0 0 23 3.79l-59.5 59.46a32 32 0 0 0 45.26 45.26L134 167.21a20 20 0 0 0 3.81 22.94l16 16a20 20 0 0 0 28.29 0l64-64a20 20 0 0 0 0-28.29ZM80 98.34 69.64 88 128 29.65 138.34 40ZM57.64 209.67a8 8 0 0 1-11.31-11.32l59.52-59.52 11.31 11.32Zm92.7-60.29-43.72-43.72 39-39 43.72 43.72Zm17.65 37L157.65 176 216 117.66 226.34 128Z" />
  </Svg>
);
const Memo = memo(SvgGavelBold);
export default Memo;
