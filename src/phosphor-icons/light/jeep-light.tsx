import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgJeepLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 98h-11.15l-9.63-44.93A14.06 14.06 0 0 0 205.53 42H50.47a14.06 14.06 0 0 0-13.69 11.07L27.15 98H16a6 6 0 0 0 0 12h10v98a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-26h100v26a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-98h10a6 6 0 0 0 0-12ZM48.51 55.58a2 2 0 0 1 2-1.58h155.02a2 2 0 0 1 2 1.58L216.58 98H39.42ZM66 208a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2v-26h28Zm150 2h-24a2 2 0 0 1-2-2v-26h28v26a2 2 0 0 1-2 2Zm2-40h-68v-34a6 6 0 0 0-12 0v34h-20v-34a6 6 0 0 0-12 0v34H38v-60h180ZM58 140a10 10 0 1 1 10 10 10 10 0 0 1-10-10Zm120 0a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z" />
  </Svg>
);
const Memo = memo(SvgJeepLight);
export default Memo;
