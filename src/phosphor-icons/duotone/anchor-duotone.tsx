import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAnchorDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 56a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z" opacity={0.2} />
    <Path d="M216 136a8 8 0 0 0-8 8 40 40 0 0 1-40 40 47.79 47.79 0 0 0-32 12.27V128h32a8 8 0 0 0 0-16h-32V87a32 32 0 1 0-16 0v25H88a8 8 0 0 0 0 16h32v68.27A47.79 47.79 0 0 0 88 184a40 40 0 0 1-40-40 8 8 0 0 0-16 0 56.06 56.06 0 0 0 56 56 32 32 0 0 1 32 32 8 8 0 0 0 16 0 32 32 0 0 1 32-32 56.06 56.06 0 0 0 56-56 8 8 0 0 0-8-8ZM112 56a16 16 0 1 1 16 16 16 16 0 0 1-16-16Z" />
  </Svg>
);
const Memo = memo(SvgAnchorDuotone);
export default Memo;
