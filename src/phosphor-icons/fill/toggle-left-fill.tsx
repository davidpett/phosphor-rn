import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144ZM80 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgToggleLeftFill);
export default Memo;
