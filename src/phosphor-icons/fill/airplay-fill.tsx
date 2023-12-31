import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplayFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M182.07 210.79A8 8 0 0 1 176 224H80a8 8 0 0 1-6.07-13.21l48-56a8 8 0 0 1 12.15 0ZM208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h12.26a4 4 0 0 0 3-1.4l46.48-54.22a24 24 0 0 1 36.44 0l46.52 54.22a4 4 0 0 0 3 1.4H208a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24Z" />
  </Svg>
);
const Memo = memo(SvgAirplayFill);
export default Memo;
