import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMoonStarsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 96a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16V72a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8Zm-96-40h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16Zm65.14 94.33A88.07 88.07 0 0 1 105.67 46.86a8 8 0 0 0-10.6-9.06A96 96 0 1 0 218.2 160.93a8 8 0 0 0-9.06-10.6Z" />
  </Svg>
);
const Memo = memo(SvgMoonStarsFill);
export default Memo;
