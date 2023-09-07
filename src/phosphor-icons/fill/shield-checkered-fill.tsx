import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldCheckeredFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.62 75.82 119.34 91 124.38a15.44 15.44 0 0 0 10 0c15.2-5.05 91-34.77 91-124.39V56a16 16 0 0 0-16-16ZM48.66 128H128V56h80v58.77a130.51 130.51 0 0 1-.66 13.21H128v96c-12.74-4.25-72.41-27.72-79.34-95.98Z" />
  </Svg>
);
const Memo = memo(SvgShieldCheckeredFill);
export default Memo;
