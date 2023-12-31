import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapPinLineThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 228h-60.28A263.66 263.66 0 0 0 171 197.62c26.81-30.83 41-63.2 41-93.62a84 84 0 0 0-168 0c0 30.42 14.17 62.79 41 93.62A263.66 263.66 0 0 0 116.28 228H56a4 4 0 0 0 0 8h144a4 4 0 0 0 0-8ZM90.9 192.23C73.15 171.8 52 139.9 52 104a76 76 0 0 1 152 0c0 35.9-21.15 67.8-38.9 88.23A254.62 254.62 0 0 1 128 227a254.62 254.62 0 0 1-37.1-34.77ZM164 104a36 36 0 1 0-36 36 36 36 0 0 0 36-36Zm-64 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28Z" />
  </Svg>
);
const Memo = memo(SvgMapPinLineThin);
export default Memo;
