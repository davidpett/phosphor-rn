import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32.14 38.88A12 12 0 0 0 28 48v168a12 12 0 0 0 24 0v-42.28c22.84-17.12 42.1-9.12 70.68 5 16.23 8 34.74 17.2 54.8 17.2 14.72 0 30.28-4.94 46.38-18.88A12 12 0 0 0 228 168V48a12 12 0 0 0-19.86-9.07c-24.71 21.41-44.53 13.31-74.82-1.68-28.13-13.98-63.15-31.31-101.18 1.63ZM204 162.26c-22.84 17.13-42.1 9.11-70.68-5C110.16 145.76 82.33 132 52 145.87V53.69c22.84-17.12 42.1-9.12 70.68 5 16.23 8 34.74 17.2 54.8 17.2A63 63 0 0 0 204 70.08Z" />
  </Svg>
);
const Memo = memo(SvgFlagBold);
export default Memo;
