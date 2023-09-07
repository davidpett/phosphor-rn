import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileArrowDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 79.52-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.48ZM160 57l23 23h-23ZM60 212V44h76v48a12 12 0 0 0 12 12h48v108Zm100.49-60.49a12 12 0 0 1 0 17l-24 24a12 12 0 0 1-17 0l-24-24a12 12 0 0 1 17-17L116 155v-31a12 12 0 0 1 24 0v31l3.51-3.52a12 12 0 0 1 16.98.03Z" />
  </Svg>
);
const Memo = memo(SvgFileArrowDownBold);
export default Memo;
