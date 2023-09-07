import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStopBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.73 36H55.27A19.3 19.3 0 0 0 36 55.27v145.46A19.3 19.3 0 0 0 55.27 220h145.46A19.3 19.3 0 0 0 220 200.73V55.27A19.3 19.3 0 0 0 200.73 36ZM196 196H60V60h136Z" />
  </Svg>
);
const Memo = memo(SvgStopBold);
export default Memo;
