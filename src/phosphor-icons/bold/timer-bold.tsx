import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTimerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 44a96 96 0 1 0 96 96 96.11 96.11 0 0 0-96-96Zm0 168a72 72 0 1 1 72-72 72.08 72.08 0 0 1-72 72Zm36.49-112.49a12 12 0 0 1 0 17l-28 28a12 12 0 0 1-17-17l28-28a12 12 0 0 1 17 0ZM92 16a12 12 0 0 1 12-12h48a12 12 0 0 1 0 24h-48a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgTimerBold);
export default Memo;
