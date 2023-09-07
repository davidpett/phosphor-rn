import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m160 56-96 96V56Z" opacity={0.2} />
    <Path d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM56 152V56a8 8 0 0 1 8-8h96a8 8 0 0 1 5.66 13.66L123.31 104l58.35 58.34a8 8 0 0 1-11.32 11.32L112 115.31l-42.34 42.35A8 8 0 0 1 56 152Zm16-19.31 34.34-34.35L140.69 64H72Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLeftDuotone);
export default Memo;
