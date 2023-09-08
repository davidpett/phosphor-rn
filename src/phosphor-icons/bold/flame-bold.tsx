import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlameBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176.69 48.72a225 225 0 0 0-42.52-35 12 12 0 0 0-12.34 0 225 225 0 0 0-42.52 35C51 78.47 36 111.42 36 144a92 92 0 0 0 184 0c0-32.58-15-65.53-43.31-95.28ZM100 184c0-13.33 5.53-26.26 16.45-38.45A93 93 0 0 1 128 134.72a93 93 0 0 1 11.55 10.83C150.47 157.74 156 170.67 156 184a28 28 0 0 1-56 0Zm79.84 3.94c.09-1.3.16-2.61.16-3.94 0-46.26-44-73.17-45.83-74.29a12 12 0 0 0-12.34 0C120 110.83 76 137.74 76 184c0 1.33.07 2.64.16 3.94A67.68 67.68 0 0 1 60 144c0-26.52 12.21-52.86 36.28-78.3A213.07 213.07 0 0 1 128 38.39c17.82 12.47 68 52.32 68 105.61a67.68 67.68 0 0 1-16.16 43.94Z" />
  </Svg>
);
const Memo = memo(SvgFlameBold);
export default Memo;
