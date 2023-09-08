import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStoolBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v24a20 20 0 0 0 20 20h2L52.15 222.13a12 12 0 1 0 23.7 3.74L83.1 180h89.8l7.25 45.87a12 12 0 1 0 23.7-3.74L182 84h2a20 20 0 0 0 20-20ZM76 44h104v16H76Zm93.11 112H86.89l11.36-72h59.5Z" />
  </Svg>
);
const Memo = memo(SvgStoolBold);
export default Memo;
