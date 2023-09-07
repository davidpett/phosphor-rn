import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBroadcastBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 84a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm77.39 12.7a83.94 83.94 0 0 1-14.78 23.3 12 12 0 0 1-17.89-16 59.92 59.92 0 0 0 0-80 12 12 0 0 1 17.89-16 84.07 84.07 0 0 1 14.78 88.7ZM83.28 168a12 12 0 0 1-17.89 16 83.94 83.94 0 0 1 0-112 12 12 0 0 1 17.89 16 59.92 59.92 0 0 0 0 80ZM252 128a123.63 123.63 0 0 1-35.43 86.78A12 12 0 1 1 199.43 198a99.88 99.88 0 0 0 0-140 12 12 0 0 1 17.14-16.8A123.63 123.63 0 0 1 252 128ZM56.57 198a12 12 0 0 1-17.14 16.8 123.89 123.89 0 0 1 0-173.56A12 12 0 0 1 56.57 58a99.88 99.88 0 0 0 0 140Z" />
  </Svg>
);
const Memo = memo(SvgBroadcastBold);
export default Memo;
