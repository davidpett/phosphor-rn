import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM40 76h176a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm176 104H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgListBold);
export default Memo;
