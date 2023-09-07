import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopySimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 72v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8Zm24-40H72a8 8 0 0 0 0 16h136v136a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgCopySimpleFill);
export default Memo;
