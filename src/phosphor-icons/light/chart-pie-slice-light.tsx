import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartPieSliceLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M102 109.5v-72a6 6 0 0 0-8-5.66 102 102 0 0 0-66.3 114.75 6 6 0 0 0 8.9 4.11l62.4-36a6 6 0 0 0 3-5.2ZM90 106l-51.66 29.8Q38 131.91 38 128a90.1 90.1 0 0 1 52-81.58Zm126.57-28.55c-.08-.16-.16-.32-.25-.47a3 3 0 0 0-.27-.42A102 102 0 0 0 128 26a6 6 0 0 0-6 6v93l-79.8 46.46a6 6 0 0 0-2.15 8.22A102 102 0 0 0 230 128a101.41 101.41 0 0 0-13.43-50.55ZM134 38.2a90 90 0 0 1 68.76 39.74L134 118ZM128 218a90.48 90.48 0 0 1-74.38-39.31l77.31-45 .17-.1 77.67-45.24A90 90 0 0 1 128 218Z" />
  </Svg>
);
const Memo = memo(SvgChartPieSliceLight);
export default Memo;
