import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCastleTurretDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 40v48l-16 16v112a8 8 0 0 1-8 8h-32v-72a24 24 0 0 0-48 0v72H72a8 8 0 0 1-8-8V104L48 88V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v16a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V40a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M200 24h-16a16 16 0 0 0-16 16v16h-16V40a16 16 0 0 0-16-16h-16a16 16 0 0 0-16 16v16H88V40a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v44.69A15.86 15.86 0 0 0 44.69 96L56 107.31V216a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V107.31L211.31 96A15.86 15.86 0 0 0 216 84.69V40a16 16 0 0 0-16-16Zm-56 192h-32v-64a16 16 0 0 1 32 0Zm56-131.31L188.69 96a15.86 15.86 0 0 0-4.69 11.31V216h-24v-64a32 32 0 0 0-64 0v64H72V107.31A15.86 15.86 0 0 0 67.31 96L56 84.69V40h16v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V40h16v16a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V40h16Z" />
  </Svg>
);
const Memo = memo(SvgCastleTurretDuotone);
export default Memo;
