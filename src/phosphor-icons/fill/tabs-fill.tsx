import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTabsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 168a8 8 0 0 1-8 8H8a8 8 0 0 1-7.66-10.3v-.05L22.63 91.4A15.89 15.89 0 0 1 38 80h84.1a15.89 15.89 0 0 1 15.32 11.4L158 160h31.3l-19.2-64H160a8 8 0 0 1 0-16h10.05a15.89 15.89 0 0 1 15.32 11.4L206 160h31.3l-19.2-64H208a8 8 0 0 1 0-16h10.05a15.89 15.89 0 0 1 15.32 11.4l22.26 74.19a.24.24 0 0 1 0 .08A8 8 0 0 1 256 168Z" />
  </Svg>
);
const Memo = memo(SvgTabsFill);
export default Memo;
