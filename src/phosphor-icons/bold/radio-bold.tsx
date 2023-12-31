import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 180a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-48a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm56-64H113.76l81.69-24.5a12 12 0 0 0-6.9-23l-160 48A12 12 0 0 0 20 80v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20Zm-4 128H44V92h168ZM60 124a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12Zm0 40a12 12 0 0 1 12-12h24a12 12 0 0 1 0 24H72a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgRadioBold);
export default Memo;
