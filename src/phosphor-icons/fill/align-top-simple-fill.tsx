import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignTopSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32a8 8 0 0 1-8 8H56a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8Zm-48 24H96a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V72a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgAlignTopSimpleFill);
export default Memo;
