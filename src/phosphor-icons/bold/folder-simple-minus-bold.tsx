import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleMinusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 132h48a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24Zm132-44v112.89A19.13 19.13 0 0 1 216.89 220H40a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h53.33a20.12 20.12 0 0 1 12 4L132 68h84a20 20 0 0 1 20 20Zm-24 4h-81.33a20.12 20.12 0 0 1-12-4L92 68H44v128h168Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleMinusBold);
export default Memo;
