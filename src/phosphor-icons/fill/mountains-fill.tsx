import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMountainsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 52a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm119 152a8 8 0 0 1-6.95 4H8a8 8 0 0 1-6.89-12.06l73.1-124.06a16 16 0 0 1 27.58 0L146.63 148l26.16-44.14A15.85 15.85 0 0 1 186.55 96a15.87 15.87 0 0 1 13.77 7.84l54.56 92.08A8 8 0 0 1 255 204ZM64.43 120h47.14L88 80Z" />
  </Svg>
);
const Memo = memo(SvgMountainsFill);
export default Memo;
