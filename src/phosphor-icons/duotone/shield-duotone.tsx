import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 56v58.77c0 84.18-71.31 112.07-85.54 116.8a7.54 7.54 0 0 1-4.92 0C111.31 226.86 40 199 40 114.79V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.61 75.82 119.34 91 124.39a15.53 15.53 0 0 0 10 0c15.2-5.05 91-34.78 91-124.39V56a16 16 0 0 0-16-16Zm0 74.79c0 78.42-66.35 104.62-80 109.18-13.53-4.51-80-30.69-80-109.18V56h160Z" />
  </Svg>
);
const Memo = memo(SvgShieldDuotone);
export default Memo;
