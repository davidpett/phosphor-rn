import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGoodreadsLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M184 88v24a56 56 0 0 1-112 0V88a56 56 0 0 1 112 0Z"
      opacity={0.2}
    />
    <Path d="M184 24a8 8 0 0 0-8 8v13.74A64 64 0 0 0 64 88v24a64 64 0 0 0 112 42.26V168a48.05 48.05 0 0 1-48 48c-16.45 0-32.72-8.08-41.44-20.58a8 8 0 1 0-13.12 9.16C85.06 221.24 106.48 232 128 232a64.07 64.07 0 0 0 64-64V32a8 8 0 0 0-8-8Zm-56 136a48.05 48.05 0 0 1-48-48V88a48 48 0 0 1 96 0v24a48.05 48.05 0 0 1-48 48Z" />
  </Svg>
);
const Memo = memo(SvgGoodreadsLogoDuotone);
export default Memo;
