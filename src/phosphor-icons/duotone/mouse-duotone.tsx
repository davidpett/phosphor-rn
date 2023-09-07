import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMouseDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24v88H56V80a56 56 0 0 1 56-56Z" opacity={0.2} />
    <Path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64Zm48 64v24h-56V32h8a48.05 48.05 0 0 1 48 48Zm-80-48h8v72H64V80a48.05 48.05 0 0 1 48-48Zm32 192h-32a48.05 48.05 0 0 1-48-48v-56h128v56a48.05 48.05 0 0 1-48 48Z" />
  </Svg>
);
const Memo = memo(SvgMouseDuotone);
export default Memo;
