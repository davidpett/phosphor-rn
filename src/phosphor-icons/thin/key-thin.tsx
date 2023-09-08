import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 20a76 76 0 0 0-71.49 101.84l-59.34 59.33A4 4 0 0 0 28 184v40a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 4-4v-20h20a4 4 0 0 0 2.83-1.17l11.33-11.34A76 76 0 1 0 160 20Zm0 144a67.52 67.52 0 0 1-25.21-4.83 4 4 0 0 0-4.45.83l-12 12H96a4 4 0 0 0-4 4v20H72a4 4 0 0 0-4 4v20H36v-34.34l60-60a4 4 0 0 0 .83-4.45A68 68 0 1 1 160 164Zm28-88a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgKeyThin);
export default Memo;
