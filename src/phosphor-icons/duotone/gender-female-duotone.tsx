import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderFemaleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 96a72 72 0 1 1-72-72 72 72 0 0 1 72 72Z" opacity={0.2} />
    <Path d="M208 96a80 80 0 1 0-88 79.6V200H88a8 8 0 0 0 0 16h32v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16h-32v-24.4A80.11 80.11 0 0 0 208 96ZM64 96a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64Z" />
  </Svg>
);
const Memo = memo(SvgGenderFemaleDuotone);
export default Memo;
