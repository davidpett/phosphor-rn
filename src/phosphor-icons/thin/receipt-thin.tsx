import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgReceiptThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 104a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h96a4 4 0 0 1 4 4Zm-4 28H80a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8Zm52-76v152a4 4 0 0 1-4 4 4.05 4.05 0 0 1-1.79-.42L192 196.47l-30.21 15.11a4 4 0 0 1-3.58 0L128 196.47l-30.21 15.11a4 4 0 0 1-3.58 0L64 196.47l-30.21 15.11A4 4 0 0 1 28 208V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v145.53l26.21-13.11a4 4 0 0 1 3.58 0L96 203.53l30.21-15.11a4 4 0 0 1 3.58 0L160 203.53l30.21-15.11a4 4 0 0 1 3.58 0L220 201.53Z" />
  </Svg>
);
const Memo = memo(SvgReceiptThin);
export default Memo;
