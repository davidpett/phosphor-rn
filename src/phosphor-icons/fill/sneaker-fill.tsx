import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.65 129.11-28.06-9.35a4 4 0 0 0-2.63 0l-43.23 15.72a8.14 8.14 0 0 1-2.73.52 8 8 0 0 1-7.71-5.88 8.17 8.17 0 0 1 5.22-9.73l18.49-6.72a2.54 2.54 0 0 0-.06-4.8 23.93 23.93 0 0 1-8.8-5.25 4 4 0 0 0-4.17-.91l-24.22 8.8a8 8 0 0 1-10.44-5.39 8.17 8.17 0 0 1 5.22-9.73L146 88.93a4 4 0 0 0 2.31-5.34l-3.06-7.16a4 4 0 0 0-5.05-2.19l-25.5 9.27a8 8 0 0 1-10.44-5.39 8.17 8.17 0 0 1 5.22-9.73l24-8.73a4 4 0 0 0 2.31-5.33l-5.4-12.73v-.1a16 16 0 0 0-20.14-8.5L34.53 60.49A16.05 16.05 0 0 0 24 75.53V192a16 16 0 0 0 16 16h200a16 16 0 0 0 16-16v-24.94a40 40 0 0 0-27.35-37.95ZM240 192H40v-16h200Z" />
  </Svg>
);
const Memo = memo(SvgSneakerFill);
export default Memo;
