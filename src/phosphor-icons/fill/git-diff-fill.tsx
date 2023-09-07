import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitDiffFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 160v48a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h28.69L64.4 171.72a55.67 55.67 0 0 1-16.4-39.6V95a32 32 0 1 1 16 0v37.13a39.71 39.71 0 0 0 11.72 28.27L104 188.69V160a8 8 0 0 1 16 0Zm88 1v-37.12a55.67 55.67 0 0 0-16.4-39.6L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31l28.28 28.29A39.71 39.71 0 0 1 192 123.88V161a32 32 0 1 0 16 0Z" />
  </Svg>
);
const Memo = memo(SvgGitDiffFill);
export default Memo;
