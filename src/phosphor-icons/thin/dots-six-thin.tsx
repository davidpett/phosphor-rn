import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 92a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm60-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm68 16a8 8 0 1 0-8-8 8 8 0 0 0 8 8ZM60 156a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm68 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm68 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixThin);
export default Memo;
