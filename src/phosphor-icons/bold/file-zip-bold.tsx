import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileZipBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 140h-16a12 12 0 0 0-12 12v56a12 12 0 0 0 24 0v-4h4a32 32 0 0 0 0-64Zm0 40h-4v-16h4a8 8 0 0 1 0 16Zm-48-28v56a12 12 0 0 1-24 0v-56a12 12 0 0 1 24 0Zm-44 56a12 12 0 0 1-12 12H52a12 12 0 0 1-10.42-17.95L63.32 164H52a12 12 0 0 1 0-24h32a12 12 0 0 1 10.42 18l-21.74 38H84a12 12 0 0 1 12 12ZM216.49 79.52l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 24 0V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.48ZM160 80V57l23 23Z" />
  </Svg>
);
const Memo = memo(SvgFileZipBold);
export default Memo;
