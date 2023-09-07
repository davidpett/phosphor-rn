import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBluetoothXBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M191.2 166.4 140 128l11.61-8.71a12 12 0 1 0-14.4-19.2L132 104V56l5.21 3.91a12 12 0 1 0 14.4-19.2L127.2 22.4A12 12 0 0 0 108 32v72L63.2 70.4a12 12 0 0 0-14.4 19.2L100 128l-51.2 38.4a12 12 0 1 0 14.4 19.2L108 152v72a12 12 0 0 0 19.2 9.6l64-48a12 12 0 0 0 0-19.2ZM132 200v-48l32 24ZM240.49 95.51a12 12 0 0 1-17 17L208 97l-15.51 15.52a12 12 0 1 1-17-17L191 80l-15.48-15.51a12 12 0 1 1 17-17L208 63l15.51-15.52a12 12 0 0 1 17 17L225 80Z" />
  </Svg>
);
const Memo = memo(SvgBluetoothXBold);
export default Memo;
