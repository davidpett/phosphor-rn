import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPasswordFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 48H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM64 168a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Zm73.3-39.81-12.36 4 7.64 10.5a8 8 0 1 1-13 9.41L112 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 1 1 5 15.21Zm72 0-12.36 4 7.64 10.5a8 8 0 1 1-13 9.41L184 141.61l-7.63 10.51a8 8 0 1 1-13-9.41l7.64-10.5-12.36-4a8 8 0 1 1 5-15.21l12.35 4v-13a8 8 0 0 1 16 0v13l12.35-4a8 8 0 0 1 5 15.21Z" />
  </Svg>
);
const Memo = memo(SvgPasswordFill);
export default Memo;
