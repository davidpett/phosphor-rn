import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkedinLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 28H40a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm4 188a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4ZM92 112v64a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0Zm88 28v36a4 4 0 0 1-8 0v-36a24 24 0 0 0-48 0v36a4 4 0 0 1-8 0v-64a4 4 0 0 1 8 0v6.87A32 32 0 0 1 180 140ZM96 84a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgLinkedinLogoThin);
export default Memo;
