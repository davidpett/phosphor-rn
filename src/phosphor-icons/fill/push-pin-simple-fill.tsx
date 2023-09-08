import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPushPinSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 176a8 8 0 0 1-8 8h-80v56a8 8 0 0 1-16 0v-56H40a8 8 0 0 1 0-16h9.29L70.46 48H64a8 8 0 0 1 0-16h128a8 8 0 0 1 0 16h-6.46l21.17 120H216a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgPushPinSimpleFill);
export default Memo;
