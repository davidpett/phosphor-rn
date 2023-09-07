import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScooterLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 138a34.32 34.32 0 0 0-4.89.36l-11.27-33.82-22.15-66.44A6 6 0 0 0 168 34h-32a6 6 0 0 0 0 12h27.68l19.75 59.25L133.07 170H77.94a34 34 0 1 0-1.44 12H136a6 6 0 0 0 4.74-2.32L188 118.93l7.74 23.23A34 34 0 1 0 212 138ZM44 194a22 22 0 1 1 22-22 22 22 0 0 1-22 22Zm168 0a22 22 0 1 1 22-22 22 22 0 0 1-22 22Z" />
  </Svg>
);
const Memo = memo(SvgScooterLight);
export default Memo;
