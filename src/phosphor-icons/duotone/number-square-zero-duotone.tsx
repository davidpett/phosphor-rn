import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareZeroDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M128 72c-14.23 0-26 6.44-34 18.61-6.47 9.86-10 23.14-10 37.39s3.56 27.53 10 37.39c8 12.17 19.74 18.61 34 18.61s26-6.44 34-18.61c6.47-9.86 10-23.14 10-37.39s-3.56-27.53-10-37.39C154 78.44 142.23 72 128 72Zm0 96c-22.1 0-28-25.14-28-40s5.9-40 28-40 28 25.14 28 40-5.9 40-28 40Zm80-136H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V48h160v160Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareZeroDuotone);
export default Memo;
