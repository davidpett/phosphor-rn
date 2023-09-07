import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarFourBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.86 109.25-61.68-22.43-22.43-61.68a19.95 19.95 0 0 0-37.5 0L86.82 86.82l-61.68 22.43a19.95 19.95 0 0 0 0 37.5l61.68 22.43 22.43 61.68a19.95 19.95 0 0 0 37.5 0l22.43-61.68 61.68-22.43a19.95 19.95 0 0 0 0-37.5Zm-71.65 38a19.92 19.92 0 0 0-11.94 11.94l-19.27 53-19.27-53a19.92 19.92 0 0 0-11.94-11.94l-53-19.25 53-19.27a19.92 19.92 0 0 0 11.94-11.94l19.27-53 19.27 53a19.92 19.92 0 0 0 11.94 11.94l53 19.27Z" />
  </Svg>
);
const Memo = memo(SvgStarFourBold);
export default Memo;
