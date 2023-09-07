import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFloppyDiskBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m222.14 77.17-43.31-43.31A19.86 19.86 0 0 0 164.69 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V91.31a19.86 19.86 0 0 0-5.86-14.14ZM164 204H92v-48h72Zm40 0h-16v-52a20 20 0 0 0-20-20H88a20 20 0 0 0-20 20v52H52V52h111l41 41ZM164 80a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h56a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgFloppyDiskBold);
export default Memo;
