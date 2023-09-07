import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm180 36H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm0 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8Zm0 40H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignRightThin);
export default Memo;
