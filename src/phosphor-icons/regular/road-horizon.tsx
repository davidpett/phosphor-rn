import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRoadHorizon = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.92 199a8 8 0 0 1-10.92-3.08L155.32 72H136v8a8 8 0 0 1-16 0v-8h-19.32L31 195.92a8 8 0 0 1-14-7.84L82.32 72H24a8 8 0 0 1 0-16h208a8 8 0 0 1 0 16h-58.32L239 188.08a8 8 0 0 1-3.08 10.92ZM128 112a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8Zm0 56a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgRoadHorizon);
export default Memo;
