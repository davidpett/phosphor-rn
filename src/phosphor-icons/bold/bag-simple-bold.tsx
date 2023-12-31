import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBagSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 60h-36.17a52 52 0 0 0-103.66 0H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20Zm-88-24a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36Zm84 160H44V84h168Z" />
  </Svg>
);
const Memo = memo(SvgBagSimpleBold);
export default Memo;
