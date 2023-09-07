import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWheelchairBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M255.14 187.54a12 12 0 0 0-15.6-6.68l-9.75 3.9-27.06-54.13A12 12 0 0 0 192 124h-76v-16h52a12 12 0 0 0 0-24h-52v-2.06a36 36 0 1 0-24 0v4.75a76 76 0 1 0 92.21 97.06 12 12 0 1 0-22.8-7.5A52 52 0 1 1 92 112v24a12 12 0 0 0 12 12h80.58l28.68 57.37a12 12 0 0 0 15.19 5.77l20-8a12 12 0 0 0 6.69-15.6ZM104 36a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z" />
  </Svg>
);
const Memo = memo(SvgWheelchairBold);
export default Memo;
