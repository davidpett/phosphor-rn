import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutLineHorizontal = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm-40 80H35.31l18.35-18.34a8 8 0 0 0-11.32-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.32-11.32L35.31 136H96a8 8 0 0 0 0-16Zm149.66 2.34-32-32a8 8 0 0 0-11.32 11.32L220.69 120H160a8 8 0 0 0 0 16h60.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutLineHorizontal);
export default Memo;
