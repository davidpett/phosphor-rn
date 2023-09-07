import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGasPumpBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m247.8 66.83-19.31-19.32a12 12 0 0 0-17 17l19.34 19.29a4 4 0 0 1 1.17 2.83V166a6 6 0 0 1-12 0v-38a28 28 0 0 0-28-28h-12V56a28 28 0 0 0-28-28H72a28 28 0 0 0-28 28v148H32a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24h-12v-80h12a4 4 0 0 1 4 4v38a30 30 0 0 0 60 0V86.63a27.81 27.81 0 0 0-8.2-19.8ZM68 204V56a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v148Zm72-92a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h32a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgGasPumpBold);
export default Memo;
