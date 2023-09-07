import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 104a36 36 0 1 0-36 36 36 36 0 0 0 36-36Zm-64 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm124 100h-92v-24.11a76 76 0 1 0-8 0V204H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8ZM60 104a68 68 0 1 1 68 68 68.07 68.07 0 0 1-68-68Z" />
  </Svg>
);
const Memo = memo(SvgWebcamThin);
export default Memo;
