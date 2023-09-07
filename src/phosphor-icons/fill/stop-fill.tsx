import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStopFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 55.27v145.46A15.29 15.29 0 0 1 200.73 216H55.27A15.29 15.29 0 0 1 40 200.73V55.27A15.29 15.29 0 0 1 55.27 40h145.46A15.29 15.29 0 0 1 216 55.27Z" />
  </Svg>
);
const Memo = memo(SvgStopFill);
export default Memo;
