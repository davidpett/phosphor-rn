import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareSixFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148 148a20 20 0 1 1-20-20 20 20 0 0 1 20 20Zm76-100v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-60 100a36 36 0 0 0-36-36h-1.82l16.69-27.9a8 8 0 0 0-13.74-8.2s-32.4 54.28-32.47 54.42A36 36 0 1 0 164 148Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareSixFill);
export default Memo;
