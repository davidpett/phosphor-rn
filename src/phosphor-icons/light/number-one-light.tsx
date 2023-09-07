import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberOneLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M142 48v160a6 6 0 0 1-12 0V58.6L99.09 77.14a6 6 0 0 1-6.18-10.29l40-24A6 6 0 0 1 142 48Z" />
  </Svg>
);
const Memo = memo(SvgNumberOneLight);
export default Memo;
