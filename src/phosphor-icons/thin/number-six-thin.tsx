import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSixThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 108a51.66 51.66 0 0 0-24.74 6.27L139.49 50a4 4 0 0 0-7-3.92L83 134.05A52 52 0 1 0 128 108Zm0 96a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgNumberSixThin);
export default Memo;
