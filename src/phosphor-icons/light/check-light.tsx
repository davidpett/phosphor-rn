import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 76.24-128 128a6 6 0 0 1-8.48 0l-56-56a6 6 0 0 1 8.48-8.48L96 191.51 219.76 67.76a6 6 0 0 1 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgCheckLight);
export default Memo;
