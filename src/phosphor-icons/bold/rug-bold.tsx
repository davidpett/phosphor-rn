import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRugBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 12a12 12 0 0 0-12 12v12h-24V24a12 12 0 0 0-24 0v12h-24V24a12 12 0 0 0-24 0v12H68V24a12 12 0 0 0-24 0v208a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0v-12h24v12a12 12 0 0 0 24 0V24a12 12 0 0 0-12-12ZM68 60h120v136H68Zm60 120a12 12 0 0 0 10.29-5.83l24-40a12 12 0 0 0 0-12.34l-24-40a12 12 0 0 0-20.58 0l-24 40a12 12 0 0 0 0 12.34l24 40A12 12 0 0 0 128 180Zm0-68.68L138 128l-10 16.68L118 128Z" />
  </Svg>
);
const Memo = memo(SvgRugBold);
export default Memo;
