import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCommandFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 86.38V100H86.38A14.25 14.25 0 0 1 72 87a14 14 0 0 1 15-15 14.25 14.25 0 0 1 13 14.38ZM72 169a14 14 0 0 0 15 15 14.25 14.25 0 0 0 13-14.34V156H86.38A14.25 14.25 0 0 0 72 169Zm112-82a14 14 0 0 0-15-15 14.25 14.25 0 0 0-13 14.34V100h13.62A14.25 14.25 0 0 0 184 87Zm40-23v128a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h128a32 32 0 0 1 32 32Zm-68 76v-24h13.38c16.39 0 30.21-12.88 30.61-29.25A30 30 0 0 0 169.25 56C152.88 56.41 140 70.23 140 86.62V100h-24V86.62c0-16.39-12.88-30.21-29.25-30.62A30 30 0 0 0 56 86.75C56.41 103.12 70.23 116 86.62 116H100v24H86.62c-16.39 0-30.21 12.88-30.62 29.25A30 30 0 0 0 86.75 200c16.37-.4 29.25-14.22 29.25-30.61V156h24v13.38c0 16.39 12.88 30.21 29.25 30.61A30 30 0 0 0 200 169.25c-.4-16.37-14.22-29.25-30.61-29.25Zm-40 0h24v-24h-24Zm40 30a14 14 0 1 0 14-14h-14Z" />
  </Svg>
);
const Memo = memo(SvgCommandFill);
export default Memo;
