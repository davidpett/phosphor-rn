import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCodeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.68 97.22 34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44Zm176 21.56-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44ZM164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37 11.79 11.79 0 0 0 4.1.73 12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38Z" />
  </Svg>
);
const Memo = memo(SvgCodeBold);
export default Memo;
