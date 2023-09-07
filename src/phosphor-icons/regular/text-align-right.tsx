import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8Zm184 32H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Zm0 40H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Zm0 40H88a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignRight);
export default Memo;
