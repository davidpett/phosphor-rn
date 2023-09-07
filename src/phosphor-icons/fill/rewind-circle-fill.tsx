import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm48 132a8 8 0 0 1-12.59 6.55l-40-28A8 8 0 0 1 120 128v28a8 8 0 0 1-12.59 6.55l-40-28a8 8 0 0 1 0-13.1l40-28A8 8 0 0 1 120 100v28a8 8 0 0 1 3.41-6.55l40-28A8 8 0 0 1 176 100Z" />
  </Svg>
);
const Memo = memo(SvgRewindCircleFill);
export default Memo;
