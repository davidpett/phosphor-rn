import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGavelDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m149.66 45.66-64 64a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 0-11.32l64-64a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32Zm88 76.68-16-16a8 8 0 0 0-11.32 0l-64 64a8 8 0 0 0 0 11.32l16 16a8 8 0 0 0 11.32 0l64-64a8 8 0 0 0 0-11.32Z"
      opacity={0.2}
    />
    <Path d="m243.32 116.69-16-16a16 16 0 0 0-20.84-1.53l-49.64-49.64a16 16 0 0 0-1.52-20.84l-16-16a16 16 0 0 0-22.63 0l-64 64a16 16 0 0 0 0 22.63l16 16a16 16 0 0 0 20.83 1.52l7.17 7.17-65.38 65.38a25 25 0 0 0 35.32 35.32L132 159.32l7.17 7.16a16 16 0 0 0 1.52 20.84l16 16a16 16 0 0 0 22.63 0l64-64a16 16 0 0 0 0-22.63ZM80 104 64 88l64-64 16 16ZM55.32 213.38a9 9 0 0 1-12.69 0 9 9 0 0 1 0-12.68L108 135.32 120.69 148ZM101 105.66 145.66 61 195 110.34 150.35 155ZM168 192l-16-16 4-4 56-56 4-4 16 16Z" />
  </Svg>
);
const Memo = memo(SvgGavelDuotone);
export default Memo;
