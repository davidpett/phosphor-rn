import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPatreonLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 104a56 56 0 1 1-56-56 56 56 0 0 1 56 56ZM80 48H64a8 8 0 0 0-8 8v152a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M176 40a64 64 0 1 0 64 64 64.07 64.07 0 0 0-64-64Zm0 112a48 48 0 1 1 48-48 48.05 48.05 0 0 1-48 48ZM80 40H64a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 168H64V56h16v152Z" />
  </Svg>
);
const Memo = memo(SvgPatreonLogoDuotone);
export default Memo;
