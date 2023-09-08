import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignLeftSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M44 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0Zm200 40v64a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h144a20 20 0 0 1 20 20Zm-24 4H84v56h136Z" />
  </Svg>
);
const Memo = memo(SvgAlignLeftSimpleBold);
export default Memo;
