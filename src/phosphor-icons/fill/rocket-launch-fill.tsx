import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRocketLaunchFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M103.77 185.94C103.38 187.49 93.63 224 40 224a8 8 0 0 1-8-8c0-53.63 36.51-63.38 38.06-63.77a8 8 0 0 1 3.88 15.53c-.9.25-22.42 6.54-25.56 39.86C81.7 204.48 88 183 88.26 182a8 8 0 0 1 15.51 4Zm93-67.4-4.77 4.77v58.33a15.91 15.91 0 0 1-4.68 11.36L153 227.3a15.91 15.91 0 0 1-11.3 4.7 16.11 16.11 0 0 1-5.1-.83 15.94 15.94 0 0 1-10.78-12.92l-5.37-38.49-44.21-44.21-38.47-5.37A16 16 0 0 1 28.7 103L63 68.68A15.91 15.91 0 0 1 74.36 64h58.33l4.77-4.77c26.68-26.67 58.82-27.82 71.41-27.07a16 16 0 0 1 15 15c.73 12.55-.42 44.7-27.09 71.38ZM116.69 80H74.36L40 114.34l37.15 5.18ZM176 139.31l-39.53 39.53 5.2 37.16L176 181.64Z" />
  </Svg>
);
const Memo = memo(SvgRocketLaunchFill);
export default Memo;