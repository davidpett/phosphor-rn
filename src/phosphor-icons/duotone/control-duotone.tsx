import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgControlDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 120H56l72-72Z" opacity={0.2} />
    <Path d="m205.66 114.34-72-72a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 128h144a8 8 0 0 0 5.66-13.66ZM75.31 112 128 59.31 180.69 112Z" />
  </Svg>
);
const Memo = memo(SvgControlDuotone);
export default Memo;
