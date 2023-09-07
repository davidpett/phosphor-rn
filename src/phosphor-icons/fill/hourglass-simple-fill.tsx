import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M211.31 196.69A16 16 0 0 1 200 224H56a16 16 0 0 1-11.32-27.31 1.59 1.59 0 0 0 .13-.13L116.43 128 44.82 59.44a1.59 1.59 0 0 0-.13-.13A16 16 0 0 1 56 32h144a16 16 0 0 1 11.32 27.31 1.59 1.59 0 0 0-.13.13L139.57 128l71.61 68.56a1.59 1.59 0 0 0 .13.13Z" />
  </Svg>
);
const Memo = memo(SvgHourglassSimpleFill);
export default Memo;
