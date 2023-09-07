import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrosshairSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 136h23.54A72.11 72.11 0 0 1 136 199.54V176a8 8 0 0 0-16 0v23.54A72.11 72.11 0 0 1 56.46 136H80a8 8 0 0 0 0-16H56.46A72.11 72.11 0 0 1 120 56.46V80a8 8 0 0 0 16 0V56.46A72.11 72.11 0 0 1 199.54 120H176a8 8 0 0 0 0 16Zm56-8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88Z" />
  </Svg>
);
const Memo = memo(SvgCrosshairSimpleFill);
export default Memo;
