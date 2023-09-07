import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadicalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 72v120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V72Z" opacity={0.2} />
    <Path d="M240 72v24a8 8 0 0 1-16 0V80h-98.45L79.49 202.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L72 177.22l40.51-108A8 8 0 0 1 120 64h112a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgRadicalDuotone);
export default Memo;
