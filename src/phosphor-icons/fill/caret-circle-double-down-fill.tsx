import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.57 54.43A104.15 104.15 0 1 0 232 128a104.17 104.17 0 0 0-30.43-73.57Zm-35.9 95.24-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 164.71l26.35-26.36a8 8 0 1 1 11.32 11.32Zm0-56-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 108.68l26.35-26.36a8 8 0 1 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleDownFill);
export default Memo;
