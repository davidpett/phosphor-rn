import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlackLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56ZM88 56a16 16 0 0 1 32 0v16h-16a16 16 0 0 1-16-16Zm-48 48a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v16H56a16 16 0 0 1-16-16Zm128 96a16 16 0 0 1-32 0v-16h16a16 16 0 0 1 16 16Zm32-32h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32Z" />
  </Svg>
);
const Memo = memo(SvgSlackLogoFill);
export default Memo;
