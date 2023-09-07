import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 216a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4ZM64 156a4 4 0 0 0 4-4V65.66l105.17 105.17a4 4 0 0 0 5.66-5.66L73.66 60H160a4 4 0 0 0 0-8H64a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLeftThin);
export default Memo;
