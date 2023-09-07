import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDnaThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 204.5V232a4 4 0 0 1-8 0v-27.5a67.62 67.62 0 0 0-37.59-60.82L102 119.48a75.6 75.6 0 0 1-42-68V24a4 4 0 0 1 8 0v27.5a67.62 67.62 0 0 0 37.59 60.82l48.4 24.2A75.6 75.6 0 0 1 196 204.5Zm-36-.5H68a67.74 67.74 0 0 1 4.59-24h75.51a4 4 0 0 0 0-8H76.3a67.91 67.91 0 0 1 19.45-22.31 4 4 0 0 0-4.75-6.45 76.26 76.26 0 0 0-31 61.26V232a4 4 0 0 0 8 0v-20h92a4 4 0 0 0 0-8Zm32-184a4 4 0 0 0-4 4v20H96a4 4 0 0 0 0 8h92a67.74 67.74 0 0 1-4.59 24h-75.52a4 4 0 1 0 0 8h71.81a67.91 67.91 0 0 1-19.45 22.31 4 4 0 0 0 4.74 6.45A76.26 76.26 0 0 0 196 51.5V24a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgDnaThin);
export default Memo;
