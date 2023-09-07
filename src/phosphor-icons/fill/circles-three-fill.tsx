import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 120a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Zm60 8a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm-120 0a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreeFill);
export default Memo;
