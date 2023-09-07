import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShield = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.61 75.82 119.34 91 124.39a15.53 15.53 0 0 0 10 0c15.2-5.05 91-34.78 91-124.39V56a16 16 0 0 0-16-16Zm0 74.79c0 78.42-66.35 104.62-80 109.18-13.53-4.51-80-30.69-80-109.18V56h160Z" />
  </Svg>
);
const Memo = memo(SvgShield);
export default Memo;
