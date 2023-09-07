import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTruck = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m247.42 117-14-35a15.93 15.93 0 0 0-14.84-10H184v-8a8 8 0 0 0-8-8H24A16 16 0 0 0 8 72v112a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.94 7.94 0 0 0-.58-3ZM184 88h34.58l9.6 24H184ZM24 72h144v64H24Zm48 136a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm81-24h-50a32 32 0 0 0-62 0H24v-32h144v12.31A32.11 32.11 0 0 0 153 184Zm31 24a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm48-24h-17a32.06 32.06 0 0 0-31-24v-32h48Z" />
  </Svg>
);
const Memo = memo(SvgTruck);
export default Memo;
