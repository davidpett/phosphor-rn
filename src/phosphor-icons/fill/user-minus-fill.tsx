import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserMinusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M198.13 194.85A8 8 0 0 1 192 208H24a8 8 0 0 1-6.12-13.15c14.94-17.78 33.52-30.41 54.17-37.17a68 68 0 1 1 71.9 0c20.65 6.76 39.23 19.39 54.18 37.17ZM248 128h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgUserMinusFill);
export default Memo;
