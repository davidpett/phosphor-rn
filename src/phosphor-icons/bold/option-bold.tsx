import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOptionBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 184a12 12 0 0 1-12 12h-63.06a19.89 19.89 0 0 1-17.88-11.06L92.58 84H32a12 12 0 0 1 0-24h63.06a19.89 19.89 0 0 1 17.88 11.06L163.42 172H224a12 12 0 0 1 12 12ZM152 84h72a12 12 0 0 0 0-24h-72a12 12 0 0 0 0 24Z" />
  </Svg>
);
const Memo = memo(SvgOptionBold);
export default Memo;
