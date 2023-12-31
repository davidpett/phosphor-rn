import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTagSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.33 125.78 197.7 57.34a12 12 0 0 0-10-5.34H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h147.72a12 12 0 0 0 10-5.34l45.63-68.44a4 4 0 0 0-.02-4.44Zm-52.28 68.44a4 4 0 0 1-3.33 1.78H40a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h147.72a4 4 0 0 1 3.33 1.78L235.19 128Z" />
  </Svg>
);
const Memo = memo(SvgTagSimpleThin);
export default Memo;
