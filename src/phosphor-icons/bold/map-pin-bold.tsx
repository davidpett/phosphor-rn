import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMapPinBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 60a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm0-112a92.1 92.1 0 0 0-92 92c0 77.36 81.64 135.4 85.12 137.83a12 12 0 0 0 13.76 0 259 259 0 0 0 42.18-39C205.15 170.57 220 136.37 220 104a92.1 92.1 0 0 0-92-92Zm31.3 174.71a249.35 249.35 0 0 1-31.3 30.18 249.35 249.35 0 0 1-31.3-30.18C80 167.37 60 137.31 60 104a68 68 0 0 1 136 0c0 33.31-20 63.37-36.7 82.71Z" />
  </Svg>
);
const Memo = memo(SvgMapPinBold);
export default Memo;
