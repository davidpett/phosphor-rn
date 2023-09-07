import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCastleTurretFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24h-8a16 16 0 0 0-16 16v16h-28V40a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v16H80V40a16 16 0 0 0-16-16h-8a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 96L56 107.31V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V107.31L211.31 96A15.86 15.86 0 0 0 216 84.69V40a16 16 0 0 0-16-16Zm-48 192h-48v-64a24 24 0 0 1 48 0Z" />
  </Svg>
);
const Memo = memo(SvgCastleTurretFill);
export default Memo;
