import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMetronomeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m219.05 201.94-27.4-86.12 25.23-27.75a12 12 0 0 0-17.76-16.14l-15.88 17.46-15.1-47.45A19.93 19.93 0 0 0 149.08 28h-42.17a19.93 19.93 0 0 0-19.06 13.94l-50.91 160A20 20 0 0 0 56 228h144a20 20 0 0 0 19.06-26.06ZM179.25 156h-24.13L173 136.34ZM109.83 52h36.33l18.42 57.91L122.69 156H76.74ZM61.47 204l7.63-24h117.79l7.63 24Z" />
  </Svg>
);
const Memo = memo(SvgMetronomeBold);
export default Memo;
