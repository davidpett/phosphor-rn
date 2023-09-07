import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareRightDuotone = (props: SvgProps) => (
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
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V48h160ZM80 128a8 8 0 0 1 8-8h60.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L148.69 136H88a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareRightDuotone);
export default Memo;
