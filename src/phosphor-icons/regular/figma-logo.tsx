import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFigmaLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 96a40 40 0 0 0-24-72H88a40 40 0 0 0-24 72 40 40 0 0 0 1.37 65A44 44 0 1 0 136 196v-36a40 40 0 1 0 48-64Zm0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24ZM64 64a24 24 0 0 1 24-24h32v48H88a24 24 0 0 1-24-24Zm24 88a24 24 0 0 1 0-48h32v48H88Zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgFigmaLogo);
export default Memo;
