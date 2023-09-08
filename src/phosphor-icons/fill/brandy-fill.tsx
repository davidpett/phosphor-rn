import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrandyFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 88a95.63 95.63 0 0 0-15.53-52.37 8 8 0 0 0-6.7-3.63H54.23a8 8 0 0 0-6.7 3.63A95.63 95.63 0 0 0 32 88a96.12 96.12 0 0 0 88 95.66V216H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16h-32v-32.34A96.12 96.12 0 0 0 224 88ZM58.7 48h138.6a79.52 79.52 0 0 1 10.3 32H48.4a79.52 79.52 0 0 1 10.3-32Z" />
  </Svg>
);
const Memo = memo(SvgBrandyFill);
export default Memo;
