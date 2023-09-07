import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeOutlineVerticalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 128a28 28 0 1 1-28-28 28 28 0 0 1 28 28Zm-28-52a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0 104a28 28 0 1 0 28 28 28 28 0 0 0-28-28Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeOutlineVerticalFill);
export default Memo;
