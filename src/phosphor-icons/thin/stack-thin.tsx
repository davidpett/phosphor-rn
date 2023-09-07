import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStackThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.45 174a4 4 0 0 1-1.44 5.48l-96 56a4 4 0 0 1-4 0l-96-56a4 4 0 0 1 4-6.92l94 54.83 94-54.83a4 4 0 0 1 5.44 1.44ZM222 124.54l-94 54.83-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 0 0-4-6.92ZM28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80Zm11.94 0L128 131.37 216.06 80 128 28.63Z" />
  </Svg>
);
const Memo = memo(SvgStackThin);
export default Memo;
