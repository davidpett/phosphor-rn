import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFloppyDiskDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 91.31V208a8 8 0 0 1-8 8h-32v-64a8 8 0 0 0-8-8H88a8 8 0 0 0-8 8v64H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h116.69a8 8 0 0 1 5.65 2.34l43.32 43.31a8 8 0 0 1 2.34 5.66Z"
      opacity={0.2}
    />
    <Path d="M219.31 80 176 36.69A15.86 15.86 0 0 0 164.69 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V91.31A15.86 15.86 0 0 0 219.31 80ZM168 208H88v-56h80Zm40 0h-24v-56a16 16 0 0 0-16-16H88a16 16 0 0 0-16 16v56H48V48h116.69L208 91.31ZM160 72a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h56a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgFloppyDiskDuotone);
export default Memo;
