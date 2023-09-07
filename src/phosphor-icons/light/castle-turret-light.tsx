import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCastleTurretLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 26h-16a14 14 0 0 0-14 14v16a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2V40a14 14 0 0 0-14-14h-16a14 14 0 0 0-14 14v16a2 2 0 0 1-2 2H88a2 2 0 0 1-2-2V40a14 14 0 0 0-14-14H56a14 14 0 0 0-14 14v44.69a13.9 13.9 0 0 0 4.1 9.89l11.32 11.32a2 2 0 0 1 .58 1.41V216a14 14 0 0 0 14 14h112a14 14 0 0 0 14-14V107.31a2 2 0 0 1 .58-1.41l11.32-11.32a13.9 13.9 0 0 0 4.1-9.89V40a14 14 0 0 0-14-14Zm-54 192h-36v-66a18 18 0 0 1 36 0Zm56-133.31a2 2 0 0 1-.58 1.41L190.1 97.42a13.9 13.9 0 0 0-4.1 9.89V216a2 2 0 0 1-2 2h-26v-66a30 30 0 0 0-60 0v66H72a2 2 0 0 1-2-2V107.31a13.9 13.9 0 0 0-4.1-9.89L54.58 86.1a2 2 0 0 1-.58-1.41V40a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V40a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a14 14 0 0 0 14 14h16a14 14 0 0 0 14-14V40a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgCastleTurretLight);
export default Memo;
