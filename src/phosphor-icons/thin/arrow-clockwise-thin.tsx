import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowClockwiseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 56v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h37.7l-34.17-31.31-.13-.12a84 84 0 1 0-1.75 120.51 4 4 0 0 1 5.5 5.82A91.43 91.43 0 0 1 128 220h-1.26A92 92 0 1 1 193 62.84l35 32.05V56a4 4 0 1 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowClockwiseThin);
export default Memo;
