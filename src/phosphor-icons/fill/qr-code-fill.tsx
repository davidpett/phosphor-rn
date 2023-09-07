import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQrCodeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Rect width={80} height={80} x={40} y={40} rx={16} />
    <Rect width={80} height={80} x={40} y={136} rx={16} />
    <Rect width={80} height={80} x={136} y={40} rx={16} />
    <Path d="M144 184a8 8 0 0 0 8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 0 8 8Z" />
    <Path d="M208 152h-24v-8a8 8 0 0 0-16 0v56h-24a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8v-40h24a8 8 0 0 0 0-16ZM208 184a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgQrCodeFill);
export default Memo;
