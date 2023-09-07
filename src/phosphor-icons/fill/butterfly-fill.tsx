import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgButterflyFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 100.17a108.42 108.42 0 0 0-8-12.64V56a8 8 0 0 1 16 0v31.53a108.42 108.42 0 0 0-8 12.64Zm104.7-49.69C229 45.7 221.84 40 209 40c-16.85 0-38.46 11.28-57.81 30.16A140.07 140.07 0 0 0 136 87.53V180a8 8 0 0 1-16 0V87.53a140.07 140.07 0 0 0-15.15-17.37C85.49 51.28 63.88 40 47 40c-12.84 0-20 5.7-23.7 10.48-6.82 8.77-12.18 24.08-.21 71.2 6.05 23.83 19.51 33 30.63 36.42A44 44 0 0 0 128 205.27a44 44 0 0 0 74.28-47.17c11.12-3.4 24.57-12.59 30.63-36.42 6.72-26.44 11.94-55.58-.21-71.2Z" />
  </Svg>
);
const Memo = memo(SvgButterflyFill);
export default Memo;
