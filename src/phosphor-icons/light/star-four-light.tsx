import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.81 114.89-63.45-23.08a1.94 1.94 0 0 1-1.17-1.17l-23.08-63.45a13.95 13.95 0 0 0-26.22 0L91.81 90.64a1.94 1.94 0 0 1-1.17 1.17l-63.45 23.08a13.95 13.95 0 0 0 0 26.22l63.45 23.08a1.94 1.94 0 0 1 1.17 1.17l23.08 63.45a13.95 13.95 0 0 0 26.22 0l23.08-63.45a1.94 1.94 0 0 1 1.17-1.17l63.45-23.08a13.95 13.95 0 0 0 0-26.22Zm-4.1 15-63.45 23.07a14 14 0 0 0-8.35 8.35l-23.07 63.45a2 2 0 0 1-3.68 0l-23.07-63.45a14 14 0 0 0-8.35-8.35l-63.45-23.12a2 2 0 0 1 0-3.68l63.45-23.07a14 14 0 0 0 8.35-8.35l23.07-63.45a2 2 0 0 1 3.68 0l23.07 63.45a14 14 0 0 0 8.35 8.35l63.45 23.07a2 2 0 0 1 0 3.68Z" />
  </Svg>
);
const Memo = memo(SvgStarFourLight);
export default Memo;
