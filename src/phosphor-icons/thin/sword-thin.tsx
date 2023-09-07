import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSwordThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36h-64a4 4 0 0 0-3.17 1.56l-66.78 86.82-12.86-12.86a12 12 0 0 0-17 0l-12.67 12.69a12 12 0 0 0 0 17L62.34 164l-30.82 30.83a12 12 0 0 0 0 17l12.68 12.66a12 12 0 0 0 17 0L92 193.67l22.81 22.82a12 12 0 0 0 17 0l12.69-12.7a12 12 0 0 0 0-17L131.62 174l86.82-66.79A4 4 0 0 0 220 104V40a4 4 0 0 0-4-4ZM55.52 218.83a4 4 0 0 1-5.66 0l-12.69-12.68a4 4 0 0 1 0-5.66L68 169.67 86.34 188Zm83.31-26.36a4 4 0 0 1 0 5.67l-12.7 12.69a4 4 0 0 1-5.66 0l-75.3-75.3a4 4 0 0 1 0-5.66l12.7-12.69a4 4 0 0 1 5.66 0ZM212 102l-86.08 66.22L109.66 152l53.17-53.17a4 4 0 1 0-5.66-5.66L104 146.34l-16.25-16.26L154 44h58Z" />
  </Svg>
);
const Memo = memo(SvgSwordThin);
export default Memo;
