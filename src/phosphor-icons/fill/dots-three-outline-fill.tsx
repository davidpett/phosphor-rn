import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeOutlineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 128a28 28 0 1 1-28-28 28 28 0 0 1 28 28ZM48 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm160 0a28 28 0 1 0 28 28 28 28 0 0 0-28-28Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeOutlineFill);
export default Memo;
