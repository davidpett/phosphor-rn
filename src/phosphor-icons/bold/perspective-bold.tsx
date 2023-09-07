import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPerspectiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 116h-12V48a20 20 0 0 0-23.58-19.67l-160 29.09A20 20 0 0 0 28 77.09V116H16a12 12 0 0 0 0 24h12v38.91a20 20 0 0 0 16.42 19.67l160 29.09A20 20 0 0 0 228 208v-68h12a12 12 0 0 0 0-24ZM52 80.43 204 52.8V116H52ZM204 203.2 52 175.57V140h152Z" />
  </Svg>
);
const Memo = memo(SvgPerspectiveBold);
export default Memo;
