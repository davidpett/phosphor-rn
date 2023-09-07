import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopyrightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 56a72 72 0 1 0 72 72 72.08 72.08 0 0 0-72-72Zm0 104a31.8 31.8 0 0 0 25.61-12.8 8 8 0 1 1 12.79 9.61 48 48 0 1 1 0-57.63 8 8 0 1 1-12.79 9.61A32 32 0 1 0 128 160Zm0-136a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Z" />
  </Svg>
);
const Memo = memo(SvgCopyrightFill);
export default Memo;
