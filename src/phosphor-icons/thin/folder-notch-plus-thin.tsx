import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchPlusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 76h-86.67l-28.8-21.6a12.05 12.05 0 0 0-7.2-2.4H40a12 12 0 0 0-12 12v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12ZM36 64a4 4 0 0 1 4-4h53.33a4 4 0 0 1 2.4.8l25.6 19.2-25.6 19.2a4 4 0 0 1-2.4.8H36Zm184 136a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-92h57.33a12.05 12.05 0 0 0 7.2-2.4l28.8-21.6H216a4 4 0 0 1 4 4Zm-64-48a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchPlusThin);
export default Memo;
