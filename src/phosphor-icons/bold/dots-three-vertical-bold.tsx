import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 60a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm16 52a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm0 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeVerticalBold);
export default Memo;
