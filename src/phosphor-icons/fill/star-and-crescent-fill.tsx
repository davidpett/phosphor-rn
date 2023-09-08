import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarAndCrescentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 206.4a8 8 0 0 1-4.36 7.13A94.93 94.93 0 0 1 112 224a96 96 0 0 1 0-192 94.93 94.93 0 0 1 43.64 10.47 8 8 0 0 1 0 14.25 80 80 0 0 0 0 142.56 8 8 0 0 1 4.36 7.12Zm91.17-85.75-26.5-11.43-2.31-29.84a8 8 0 0 0-14.14-4.47l-18.59 22.51-27.71-6.85a8 8 0 0 0-8.81 11.82L168.18 128l-15.07 25.61a8 8 0 0 0 8.81 11.82l27.71-6.85 18.59 22.51a8 8 0 0 0 14.14-4.47l2.31-29.84 26.5-11.43a8 8 0 0 0 0-14.7Z" />
  </Svg>
);
const Memo = memo(SvgStarAndCrescentFill);
export default Memo;
