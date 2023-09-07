import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGrainsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 60a83.5 83.5 0 0 0-33.88 7.16c-13-30.78-43-46.08-44.33-46.74a4 4 0 0 0-3.58 0c-1.32.66-31.3 16-44.33 46.74A83.5 83.5 0 0 0 48 60a4 4 0 0 0-4 4v80a84 84 0 0 0 168 0V64a4 4 0 0 0-4-4Zm-84 159.9A76.11 76.11 0 0 1 52 144v-19.9a76.11 76.11 0 0 1 72 75.9Zm0-55.63a84.12 84.12 0 0 0-72-48.17v-48a76.11 76.11 0 0 1 72 75.9ZM89.05 70.75c10.07-24.22 32.46-38.47 39-42.19 6.49 3.72 28.88 18 38.95 42.19a84.43 84.43 0 0 0-39 47.66 84.43 84.43 0 0 0-38.95-47.66ZM204 144a76.11 76.11 0 0 1-72 75.9V200a76.11 76.11 0 0 1 72-75.9Zm0-27.9a84.12 84.12 0 0 0-72 48.17V144a76.11 76.11 0 0 1 72-75.9Z" />
  </Svg>
);
const Memo = memo(SvgGrainsThin);
export default Memo;
