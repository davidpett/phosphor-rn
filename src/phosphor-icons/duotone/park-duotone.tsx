import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParkDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 160h-64l32-128Z" opacity={0.2} />
    <Path d="M232 192h-32v-24h24a8 8 0 0 0 7.76-9.94l-32-128a8 8 0 0 0-15.52 0l-32 128A8 8 0 0 0 160 168h24v24h-64v-16h8a8 8 0 0 0 0-16h-8v-16h8a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16h8v16h-8a8 8 0 0 0 0 16h8v16H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16ZM192 65l21.75 87h-43.5ZM64 144h40v16H64Zm0 32h40v16H64Zm52-80a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z" />
  </Svg>
);
const Memo = memo(SvgParkDuotone);
export default Memo;
