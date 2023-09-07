import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 128a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-76-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm136 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeThin);
export default Memo;
