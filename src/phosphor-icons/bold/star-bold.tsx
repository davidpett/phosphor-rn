import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243 96.05a20 20 0 0 0-17.26-13.72l-57-4.93-22.3-53.14a20 20 0 0 0-36.82 0L87.29 77.4l-57 4.93a20 20 0 0 0-11.42 35.07l43.32 37.8-13 56.24A20 20 0 0 0 79 233.1l49-29.76 49 29.76a20 20 0 0 0 29.8-21.66l-13-56.24 43.32-37.8A20 20 0 0 0 243 96.05Zm-66.75 42.62a20 20 0 0 0-6.35 19.63l11.39 49.32-42.94-26.08a19.9 19.9 0 0 0-20.7 0l-42.94 26.08L86.1 158.3a20 20 0 0 0-6.35-19.63l-38.09-33.23 50.14-4.34a19.92 19.92 0 0 0 16.69-12.19L128 42.42l19.51 46.49a19.92 19.92 0 0 0 16.69 12.19l50.14 4.34Z" />
  </Svg>
);
const Memo = memo(SvgStarBold);
export default Memo;
