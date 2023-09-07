import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaletteBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M203.57 51A107.9 107.9 0 0 0 20 128c0 44.72 27.6 82.25 72 97.94A36 36 0 0 0 140 192a12 12 0 0 1 12-12h46.21a35.79 35.79 0 0 0 35.1-28 108.6 108.6 0 0 0 2.69-24.91A107.23 107.23 0 0 0 203.57 51Zm6.34 95.67a11.91 11.91 0 0 1-11.7 9.3H152a36 36 0 0 0-36 36 12 12 0 0 1-16 11.3c-16.65-5.88-30.65-15.76-40.48-28.56A76 76 0 0 1 44 128a84 84 0 0 1 83.13-84h.87a84.35 84.35 0 0 1 84 83.29 84.72 84.72 0 0 1-2.09 19.42ZM144 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-44 24a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm0 56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm88-56a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgPaletteBold);
export default Memo;
