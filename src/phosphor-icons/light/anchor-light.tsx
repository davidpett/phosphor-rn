import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAnchorLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 138a6 6 0 0 0-6 6 42 42 0 0 1-42 42 45.86 45.86 0 0 0-34 15.08V126h34a6 6 0 0 0 0-12h-34V85.4a30 30 0 1 0-12 0V114H88a6 6 0 0 0 0 12h34v75.08A45.86 45.86 0 0 0 88 186a42 42 0 0 1-42-42 6 6 0 0 0-12 0 54.06 54.06 0 0 0 54 54 34 34 0 0 1 34 34 6 6 0 0 0 12 0 34 34 0 0 1 34-34 54.06 54.06 0 0 0 54-54 6 6 0 0 0-6-6ZM110 56a18 18 0 1 1 18 18 18 18 0 0 1-18-18Z" />
  </Svg>
);
const Memo = memo(SvgAnchorLight);
export default Memo;
