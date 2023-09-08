import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPulseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 128a12 12 0 0 1-12 12h-24.58l-36.69 73.37A12 12 0 0 1 160 220h-.6a12 12 0 0 1-10.61-7.72L95 71.15 66.92 133A12 12 0 0 1 56 140H24a12 12 0 0 1 0-24h24.27l36.81-81a12 12 0 0 1 22.13.7l54.28 142.46 27.78-55.56A12 12 0 0 1 200 116h32a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgPulseBold);
export default Memo;
