import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassLowThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 75.64V40a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v36a12 12 0 0 0 4.8 9.6l56.53 42.4-56.53 42.4A12 12 0 0 0 60 180v36a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12v-35.64a12.05 12.05 0 0 0-4.76-9.57L134.63 128l56.61-42.79a12.05 12.05 0 0 0 4.76-9.57ZM184 220H72a4 4 0 0 1-4-4v-28h120v28a4 4 0 0 1-4 4Zm4-40H68a4 4 0 0 1 1.6-3.2L128 133l58.42 44.16A4 4 0 0 1 188 180Zm0-104.36a4 4 0 0 1-1.59 3.19L128 123 69.6 79.2A4 4 0 0 1 68 76V40a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgHourglassLowThin);
export default Memo;
