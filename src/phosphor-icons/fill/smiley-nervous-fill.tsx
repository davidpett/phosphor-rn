import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyNervousFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm36 72a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm-72 0a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm89.66 77.66a8 8 0 0 1-11.32 0L160 163.31l-10.34 10.35a8 8 0 0 1-11.32 0L128 163.31l-10.34 10.35a8 8 0 0 1-11.32 0L96 163.31l-10.34 10.35a8 8 0 0 1-11.32-11.32l16-16a8 8 0 0 1 11.32 0L112 156.69l10.34-10.35a8 8 0 0 1 11.32 0L144 156.69l10.34-10.35a8 8 0 0 1 11.32 0l16 16a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgSmileyNervousFill);
export default Memo;
