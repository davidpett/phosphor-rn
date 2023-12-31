import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWindBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 104a12 12 0 0 1 0-24h96a12 12 0 0 0 0-24 15.07 15.07 0 0 0-10.26 4.45 12 12 0 0 1-17-16.9A39.34 39.34 0 0 1 120 32a36 36 0 0 1 0 72Zm184-36a39.34 39.34 0 0 0-27.3 11.55 12 12 0 0 0 17 16.9A15.07 15.07 0 0 1 208 92a12 12 0 0 1 0 24H32a12 12 0 0 0 0 24h176a36 36 0 0 0 0-72Zm-56 84H40a12 12 0 0 0 0 24h112a12 12 0 0 1 0 24 15.11 15.11 0 0 1-10.27-4.45 12 12 0 1 0-17 16.9A39.34 39.34 0 0 0 152 224a36 36 0 0 0 0-72Z" />
  </Svg>
);
const Memo = memo(SvgWindBold);
export default Memo;
