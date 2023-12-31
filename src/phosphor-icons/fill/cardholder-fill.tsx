import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCardholderFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 48H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h160a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24Zm-56.48 76.81a24 24 0 0 1-47 0A16 16 0 0 0 88.81 112H40V96h176v16h-48.81a16 16 0 0 0-15.67 12.81ZM48 64h160a8 8 0 0 1 8 8v8H40v-8a8 8 0 0 1 8-8Z" />
  </Svg>
);
const Memo = memo(SvgCardholderFill);
export default Memo;
