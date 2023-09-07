import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAlignCenterBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm36 28a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Zm152 40H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Zm-24 40H64a12 12 0 0 0 0 24h128a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgTextAlignCenterBold);
export default Memo;
