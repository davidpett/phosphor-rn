import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandsPrayingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.32 180-36.24-36.25-36.46-120.29A21.76 21.76 0 0 0 128 12.93a21.76 21.76 0 0 0-34.62 10.53l-36.46 120.3L20.68 180a16 16 0 0 0 0 22.62l32.69 32.69a16 16 0 0 0 22.63 0L124.28 187a40.68 40.68 0 0 0 3.72-4.29 40.68 40.68 0 0 0 3.72 4.29L180 235.32a16 16 0 0 0 22.63 0l32.69-32.69a16 16 0 0 0 0-22.63ZM120 158.75a23.85 23.85 0 0 1-7 17L88.68 200 56 167.32l13.65-13.66a8 8 0 0 0 2-3.34l37-122.22A5.78 5.78 0 0 1 120 29.78Zm47.44 41.38L143 175.72a23.85 23.85 0 0 1-7-17v-129a5.78 5.78 0 0 1 11.31-1.68l37 122.22a8 8 0 0 0 2 3.34l14.49 14.49Z" />
  </Svg>
);
const Memo = memo(SvgHandsPrayingFill);
export default Memo;
