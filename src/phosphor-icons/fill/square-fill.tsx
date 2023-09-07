import Svg, { Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Rect width={192} height={192} x={32} y={32} rx={16} />
  </Svg>
);
const Memo = memo(SvgSquareFill);
export default Memo;
