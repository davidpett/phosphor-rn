import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVinylRecordFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM72 128a8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16 56.06 56.06 0 0 0-56 56Zm32 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24Zm24 72a8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0 72.08 72.08 0 0 1-72 72Z" />
  </Svg>
);
const Memo = memo(SvgVinylRecordFill);
export default Memo;
