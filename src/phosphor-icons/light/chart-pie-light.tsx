import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartPieLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm74.74 51.92L134 117.61V38.2a90 90 0 0 1 68.74 39.72ZM122 38.2v86.34L47.24 167.7A90 90 0 0 1 122 38.2Zm6 179.8a90 90 0 0 1-74.74-39.92l155.5-89.78A90 90 0 0 1 128 218Z" />
  </Svg>
);
const Memo = memo(SvgChartPieLight);
export default Memo;
