import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenChartFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16Zm-128 80a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm24 96a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm8-96a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm32 0a8 8 0 0 1-16 0v-32a8 8 0 0 1 16 0ZM40 64V48h176v16H40Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenChartFill);
export default Memo;
