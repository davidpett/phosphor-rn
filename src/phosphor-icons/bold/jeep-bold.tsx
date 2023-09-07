import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgJeepBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 92h-6.3l-8.61-40.19A20.11 20.11 0 0 0 205.53 36H50.47a20.11 20.11 0 0 0-19.56 15.81L22.3 92H16a12 12 0 0 0 0 24h4v92a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-20h88v20a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-92h4a12 12 0 0 0 0-24ZM53.7 60h148.6l6.86 32H46.84ZM60 204H44v-16h16Zm136 0v-16h16v16Zm16-40h-32v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24h-16v-24a12 12 0 0 0-24 0v24H44v-48h168Z" />
  </Svg>
);
const Memo = memo(SvgJeepBold);
export default Memo;
