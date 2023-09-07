import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDnaFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 204.5V232a8 8 0 0 1-16 0v-27.5a63.67 63.67 0 0 0-35.38-57.25l-48.4-24.19A79.58 79.58 0 0 1 56 51.5V24a8 8 0 0 1 16 0v27.5a63.67 63.67 0 0 0 35.38 57.25l48.4 24.19A79.58 79.58 0 0 1 200 204.5ZM163.18 192H83a8 8 0 0 1-8-8.53 8.19 8.19 0 0 1 8.25-7.47h66.45a4 4 0 0 0 2.75-6.9 48.24 48.24 0 0 0-11-7.53L97 139.31a8 8 0 0 0-8.31.71A80.27 80.27 0 0 0 56 204.5v27.23a8.18 8.18 0 0 0 7.47 8.27 8 8 0 0 0 8.53-8v-16h88a8 8 0 0 0 8-8v-3.5a48.76 48.76 0 0 0-.9-9.32 4 4 0 0 0-3.92-3.18Zm28.29-176a8.18 8.18 0 0 0-7.47 8.27V40H96a8 8 0 0 0-8 8v3.5a48.76 48.76 0 0 0 .9 9.32A4 4 0 0 0 92.82 64h79.93a8.19 8.19 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53h-66.7a4 4 0 0 0-2.75 6.9 48.24 48.24 0 0 0 11 7.53L159 116.69a7.93 7.93 0 0 0 8.31-.72A80.27 80.27 0 0 0 200 51.5V24a8 8 0 0 0-8.53-8Z" />
  </Svg>
);
const Memo = memo(SvgDnaFill);
export default Memo;
