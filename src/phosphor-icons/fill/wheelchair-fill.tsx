import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWheelchairFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m250.53 199.59-24 8a8 8 0 0 1-9.69-4L187.05 144H104a8 8 0 0 1-8-8v-29.66A56 56 0 0 0 112 216c25.91 0 50.09-18.05 56.25-42a8 8 0 1 1 15.5 4c-8.06 31.3-38.23 54-71.75 54A72 72 0 0 1 96 89.81v-19a28 28 0 1 1 16 0V88h56a8 8 0 0 1 0 16h-56v24h80a8 8 0 0 1 7.15 4.42l28.9 57.8 17.42-5.81a8 8 0 0 1 5.06 15.18Z" />
  </Svg>
);
const Memo = memo(SvgWheelchairFill);
export default Memo;
