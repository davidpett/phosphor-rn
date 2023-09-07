import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m255.31 196.75-64-144A8 8 0 0 0 184 48H72a8 8 0 0 0-7.31 4.75v.12l-64 143.88A8 8 0 0 0 8 208h240a8 8 0 0 0 7.31-11.25ZM64 192H20.31L64 93.7Zm16 0V93.7l43.69 98.3Z" />
  </Svg>
);
const Memo = memo(SvgTentFill);
export default Memo;
