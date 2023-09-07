import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRainbowCloudFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 160a48.05 48.05 0 0 1-48 48h-48c-17.65 0-32-14.75-32-32.89s14.35-32.89 32-32.89a31 31 0 0 1 3.34.18A48 48 0 0 1 248 160ZM112 72a87.57 87.57 0 0 1 61.35 24.91 8 8 0 0 0 11.15-11.47A104 104 0 0 0 8 160v16a8 8 0 0 0 16 0v-16a88.1 88.1 0 0 1 88-88Zm0 32a55.58 55.58 0 0 1 33.13 10.84A8 8 0 1 0 154.6 102 72 72 0 0 0 40 160v16a8 8 0 0 0 16 0v-16a56.06 56.06 0 0 1 56-56Zm15.21 26.71a8 8 0 0 0-5.94-9.63A40 40 0 0 0 72 160v16a8 8 0 0 0 16 0v-16a24 24 0 0 1 29.57-23.35 8 8 0 0 0 9.64-5.94Z" />
  </Svg>
);
const Memo = memo(SvgRainbowCloudFill);
export default Memo;