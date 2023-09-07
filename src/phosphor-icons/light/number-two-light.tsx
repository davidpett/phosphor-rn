import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberTwoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174 208a6 6 0 0 1-6 6H88a6 6 0 0 1-4.8-9.6l72-95.92a34 34 0 0 0-31.88-54.14 34.1 34.1 0 0 0-26.49 20.07 6 6 0 0 1-11-4.81 46.47 46.47 0 0 1 5.43-9.28 46 46 0 0 1 73.48 55.37L100 202h68a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgNumberTwoLight);
export default Memo;