import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintRollerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 92h-20V64a12 12 0 0 0-12-12H48a12 12 0 0 0-12 12v28H16a4 4 0 0 0 0 8h20v28a12 12 0 0 0 12 12h152a12 12 0 0 0 12-12v-28h20a4 4 0 0 1 4 4v50a4 4 0 0 1-2.9 3.84L132.7 186.5A12 12 0 0 0 124 198v34a4 4 0 0 0 8 0v-34a4 4 0 0 1 2.9-3.84l100.4-28.66A12 12 0 0 0 244 154v-50a12 12 0 0 0-12-12Zm-28 36a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h152a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPaintRollerThin);
export default Memo;
