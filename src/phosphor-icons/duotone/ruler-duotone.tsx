import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRulerDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M229.66 90.34 90.34 229.66a8 8 0 0 1-11.31 0L26.34 177a8 8 0 0 1 0-11.31L165.66 26.34a8 8 0 0 1 11.31 0L229.66 79a8 8 0 0 1 0 11.34Z"
      opacity={0.2}
    />
    <Path d="m235.32 73.37-52.69-52.68a16 16 0 0 0-22.63 0L20.68 160a16 16 0 0 0 0 22.63l52.69 52.68a16 16 0 0 0 22.63 0L235.32 96a16 16 0 0 0 0-22.63ZM84.68 224 32 171.31l32-32 26.34 26.35a8 8 0 0 0 11.32-11.32L75.31 128 96 107.31l26.34 26.35a8 8 0 0 0 11.32-11.32L107.31 96 128 75.31l26.34 26.35a8 8 0 0 0 11.32-11.32L139.31 64l32-32L224 84.69Z" />
  </Svg>
);
const Memo = memo(SvgRulerDuotone);
export default Memo;
