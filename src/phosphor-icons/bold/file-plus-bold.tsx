import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilePlusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49ZM160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm104-60a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12h-12a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgFilePlusBold);
export default Memo;
