import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Zm-48 8H80a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h96a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm0 88H40a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h136a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightFill);
export default Memo;
