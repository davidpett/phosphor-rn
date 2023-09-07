import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStrategyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M68 156a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 56a24 24 0 1 1 24-24 24 24 0 0 1-24 24ZM37.17 109.17 54.34 92 37.17 74.83a4 4 0 0 1 5.66-5.66L60 86.34l17.17-17.17a4 4 0 0 1 5.66 5.66L65.66 92l17.17 17.17a4 4 0 0 1-5.66 5.66L60 97.66l-17.17 17.17a4 4 0 0 1-5.66-5.66Zm181.66 96a4 4 0 0 1-5.66 5.66L196 193.66l-17.17 17.17a4 4 0 0 1-5.66-5.66L190.34 188l-17.17-17.17a4 4 0 0 1 5.66-5.66L196 182.34l17.17-17.17a4 4 0 0 1 5.66 5.66L201.66 188Zm-46.21-93.41c-5.82 21-23.77 39.15-43.65 44.12a4.09 4.09 0 0 1-1 .12 4 4 0 0 1-1-7.88c16.94-4.24 32.87-20.42 37.88-38.49 3.47-12.53 3.55-31.51-15.74-50.8L140 49.66V80a4 4 0 0 1-8 0V40a4 4 0 0 1 4-4h40a4 4 0 0 1 0 8h-30.34l9.17 9.17c17.17 17.18 23.5 37.99 17.79 58.59Z" />
  </Svg>
);
const Memo = memo(SvgStrategyThin);
export default Memo;
