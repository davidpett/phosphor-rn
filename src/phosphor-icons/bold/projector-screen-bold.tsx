import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 72V48a20 20 0 0 0-20-20H40a20 20 0 0 0-20 20v24a20 20 0 0 0 16 19.6V164h-4a12 12 0 0 0 0 24h84v23.22a24 24 0 1 0 24 0V188h84a12 12 0 0 0 0-24h-4V91.6A20 20 0 0 0 236 72ZM44 52h168v16H44Zm16 112V92h136v72Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenBold);
export default Memo;
