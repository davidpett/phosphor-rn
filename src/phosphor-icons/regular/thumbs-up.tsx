import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThumbsUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234 80.12A24 24 0 0 0 216 72h-56V56a40 40 0 0 0-40-40 8 8 0 0 0-7.16 4.42L75.06 96H32a16 16 0 0 0-16 16v88a16 16 0 0 0 16 16h172a24 24 0 0 0 23.82-21l12-96A24 24 0 0 0 234 80.12ZM32 112h40v88H32Zm191.94-15-12 96a8 8 0 0 1-7.94 7H88v-94.11l36.71-73.43A24 24 0 0 1 144 56v24a8 8 0 0 0 8 8h64a8 8 0 0 1 7.94 9Z" />
  </Svg>
);
const Memo = memo(SvgThumbsUp);
export default Memo;
