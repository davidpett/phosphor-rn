import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0Zm-40 24v36a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h88a20 20 0 0 1 20 20Zm-24 4H84v28h80Zm24 88v36a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20v-36a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20Zm-24 4H44v28h120Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightBold);
export default Memo;
