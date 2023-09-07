import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhosphorLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 96a76.08 76.08 0 0 0-76-76H64a12 12 0 0 0-12 12v128a84.09 84.09 0 0 0 84 84 12 12 0 0 0 12-12v-60.11A76.09 76.09 0 0 0 220 96ZM76 77.81 115.48 148H76Zm48 36.38L84.52 44H124ZM77.22 172H124v46.79A60.18 60.18 0 0 1 77.22 172ZM148 147.83V44.17a52 52 0 0 1 0 103.66Z" />
  </Svg>
);
const Memo = memo(SvgPhosphorLogoBold);
export default Memo;
