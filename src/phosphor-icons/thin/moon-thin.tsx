import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.72 145.06a4 4 0 0 0-4-1A92.08 92.08 0 0 1 111.94 29.27a4 4 0 0 0-5-5 100.78 100.78 0 0 0-50.86 35.61 100 100 0 0 0 140 140 100.78 100.78 0 0 0 35.59-50.87 4 4 0 0 0-.95-3.95Zm-39.42 48.47A92 92 0 0 1 62.47 64.7a93 93 0 0 1 39.88-30.35 100.09 100.09 0 0 0 119.3 119.3 93 93 0 0 1-30.35 39.88Z" />
  </Svg>
);
const Memo = memo(SvgMoonThin);
export default Memo;
