import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushHouseholdThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.8 28.2a28 28 0 0 0-39.6 0l-.15.16-54.9 61.17a4 4 0 0 1-5.81.16l-9.2-9.2a20 20 0 0 0-28.28 0l-76.69 76.68a4 4 0 0 0 0 5.66l80 80a4 4 0 0 0 5.66 0l76.68-76.69a20 20 0 0 0 0-28.28l-9.2-9.2a4 4 0 0 1-1.17-2.94 4 4 0 0 1 1.33-2.87L227.64 68l.16-.15a28 28 0 0 0 0-39.65ZM96 234.34 73.66 212l25.17-25.17a4 4 0 0 0-5.66-5.66L68 206.34 49.66 188l25.17-25.17a4 4 0 0 0-5.66-5.66L44 182.34 21.66 160 72 109.66 146.34 184ZM222.21 62.07l-61.09 54.83a12 12 0 0 0-.46 17.41l9.2 9.2a12 12 0 0 1 0 17L152 178.34 77.66 104l17.85-17.86a12 12 0 0 1 17 0l9.2 9.2a12 12 0 0 0 17.41-.46l54.83-61.09a20 20 0 0 1 28.28 28.28Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushHouseholdThin);
export default Memo;
