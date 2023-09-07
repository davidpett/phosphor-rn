import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSnowflakeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 128a92 92 0 1 1-92-92 92.1 92.1 0 0 1 92 92Z" opacity={0.2} />
    <Path d="M223.77 150.09a8 8 0 0 1-5.86 9.68l-24.64 6 6.46 24.11a8 8 0 0 1-5.66 9.8 8.25 8.25 0 0 1-2.07.32 8 8 0 0 1-7.72-5.93l-7.72-28.8L136 141.86v46.83l21.66 21.65a8 8 0 0 1-11.32 11.32L128 203.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L120 188.69v-46.83l-40.55 23.41-7.72 28.8A8 8 0 0 1 64 200a8.25 8.25 0 0 1-2.08-.27 8 8 0 0 1-5.66-9.8l6.46-24.11-24.64-6a8 8 0 0 1 3.82-15.54l29.45 7.23L112 128l-40.64-23.46-29.45 7.23A7.85 7.85 0 0 1 40 112a8 8 0 0 1-1.91-15.77l24.64-6-6.46-24.16a8 8 0 0 1 15.46-4.14l7.72 28.8L120 114.14V67.31L98.34 45.66a8 8 0 0 1 11.32-11.32L128 52.69l18.34-18.35a8 8 0 0 1 11.32 11.32L136 67.31v46.83l40.55-23.41 7.72-28.8a8 8 0 0 1 15.46 4.14l-6.46 24.11 24.64 6A8 8 0 0 1 216 112a7.85 7.85 0 0 1-1.91-.23l-29.45-7.23L144 128l40.64 23.46 29.45-7.23a8 8 0 0 1 9.68 5.86Z" />
  </Svg>
);
const Memo = memo(SvgSnowflakeDuotone);
export default Memo;
