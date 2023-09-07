import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballCapBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20A108.12 108.12 0 0 0 20 128v56a27.86 27.86 0 0 0 15.26 24.93 28 28 0 0 0 29.28-2.34C76.2 198.11 96.68 188 128 188s51.8 10.1 63.46 18.58A28 28 0 0 0 236 184v-56A108.12 108.12 0 0 0 128 20Zm84 108v1.87a170 170 0 0 0-33.29-14.3 170.81 170.81 0 0 0-23.45-67A84.14 84.14 0 0 1 212 128Zm-58.46-18.12a174.42 174.42 0 0 0-51.08 0A150 150 0 0 1 128 50.94a150.07 150.07 0 0 1 25.54 58.94Zm-52.8-61.31a170.81 170.81 0 0 0-23.45 67A170 170 0 0 0 44 129.87V128a84.14 84.14 0 0 1 56.74-79.43Zm109.11 139a4 4 0 0 1-4.28-.36C191 176.61 165.77 164 128 164s-63 12.61-77.57 23.18a4 4 0 0 1-4.28.36A3.76 3.76 0 0 1 44 184v-25.86a148 148 0 0 1 168 0V184a3.76 3.76 0 0 1-2.15 3.54Z" />
  </Svg>
);
const Memo = memo(SvgBaseballCapBold);
export default Memo;
