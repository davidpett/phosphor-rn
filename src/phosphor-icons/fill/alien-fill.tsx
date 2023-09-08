import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlienFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 16a96.11 96.11 0 0 0-96 96c0 24 12.56 55.06 33.61 83 21.18 28.15 44.5 45 62.39 45s41.21-16.81 62.39-45c21.05-28 33.61-59 33.61-83a96.11 96.11 0 0 0-96-96ZM64 116a12 12 0 0 1 12-12 36 36 0 0 1 36 36 12 12 0 0 1-12 12 36 36 0 0 1-36-36Zm80 84h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm12-48a12 12 0 0 1-12-12 36 36 0 0 1 36-36 12 12 0 0 1 12 12 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgAlienFill);
export default Memo;
