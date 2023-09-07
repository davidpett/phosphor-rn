import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWalletBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 140a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm40-32v80a32 32 0 0 1-32 32H60a32 32 0 0 1-32-32V68.92A32 32 0 0 1 60 36h132a12 12 0 0 1 0 24H60a8 8 0 0 0-8 8.26v.08A8.32 8.32 0 0 0 60.48 76H204a32 32 0 0 1 32 32Zm-24 0a8 8 0 0 0-8-8H60.48A33.72 33.72 0 0 1 52 98.92V188a8 8 0 0 0 8 8h144a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgWalletBold);
export default Memo;
