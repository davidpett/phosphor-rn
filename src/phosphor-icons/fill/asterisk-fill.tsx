import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAsteriskFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm64.12 133.14a8 8 0 0 1-8.24 13.72L136 142.13V194a8 8 0 0 1-16 0v-51.87l-47.88 28.73a8 8 0 0 1-8.24-13.72L112.45 128 63.88 98.86a8 8 0 0 1 8.24-13.72L120 113.87V62a8 8 0 0 1 16 0v51.87l47.88-28.73a8 8 0 1 1 8.24 13.72L143.55 128Z" />
  </Svg>
);
const Memo = memo(SvgAsteriskFill);
export default Memo;
