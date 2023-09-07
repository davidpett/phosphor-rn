import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPianoKeysBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20ZM92 132V52h24v80Zm52 24v48h-32v-48Zm20-24h-24V52h24ZM52 52h16v92a12 12 0 0 0 12 12h8v48H52Zm152 152h-36v-48h8a12 12 0 0 0 12-12V52h16Z" />
  </Svg>
);
const Memo = memo(SvgPianoKeysBold);
export default Memo;
