import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCassetteTapeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M88 112a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm152-48v128a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16Zm-54 128-15.6-20.8a8 8 0 0 0-6.4-3.2H92a8 8 0 0 0-6.4 3.2L70 192Zm30-80a32 32 0 0 0-32-32H72a32 32 0 0 0 0 64h112a32 32 0 0 0 32-32ZM99.7 96a31.92 31.92 0 0 1 0 32h56.6a31.92 31.92 0 0 1 0-32Zm84.3 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgCassetteTapeFill);
export default Memo;
