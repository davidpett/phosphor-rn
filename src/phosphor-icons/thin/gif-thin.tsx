import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGifThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 72v112a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0Zm84-4h-48a4 4 0 0 0-4 4v112a4 4 0 0 0 8 0v-52h36a4 4 0 0 0 0-8h-36V76h44a4 4 0 0 0 0-8ZM96 124H72a4 4 0 0 0 0 8h20v20a28 28 0 0 1-56 0v-48a28 28 0 0 1 28-28c13 0 25 9 28.13 21a4 4 0 1 0 7.74-2C95.85 79.36 80.76 68 64 68a36 36 0 0 0-36 36v48a36 36 0 0 0 72 0v-24a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgGifThin);
export default Memo;
