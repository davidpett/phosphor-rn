import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm8 48h128a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16Zm176 24H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Zm-48 40H40a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignLeft);
export default Memo;
