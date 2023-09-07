import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoonStarsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M238 96a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18V72a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6Zm-94-42h10v10a6 6 0 0 0 12 0V54h10a6 6 0 0 0 0-12h-10V32a6 6 0 0 0-12 0v10h-10a6 6 0 0 0 0 12Zm71.25 100.28a6 6 0 0 1 1.07 6A94 94 0 1 1 95.76 39.68a6 6 0 0 1 7.94 6.79A90.11 90.11 0 0 0 192 154a90.9 90.9 0 0 0 17.53-1.7 6 6 0 0 1 5.72 1.98Zm-14.37 11.34q-4.42.38-8.88.38A102.12 102.12 0 0 1 90 64q0-4.45.38-8.88a82 82 0 1 0 110.5 110.5Z" />
  </Svg>
);
const Memo = memo(SvgMoonStarsLight);
export default Memo;
