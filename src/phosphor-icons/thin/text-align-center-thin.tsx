import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignCenterThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm28 36a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Zm152 40H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8Zm-24 40H64a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignCenterThin);
export default Memo;
