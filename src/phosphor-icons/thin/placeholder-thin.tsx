import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlaceholderThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 12v158.34L49.66 44H208a4 4 0 0 1 4 4ZM44 208V49.66L206.34 212H48a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgPlaceholderThin);
export default Memo;
