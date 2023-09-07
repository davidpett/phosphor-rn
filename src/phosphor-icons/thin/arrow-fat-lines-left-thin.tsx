import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 76h-28V32a4 4 0 0 0-6.83-2.83l-96 96a4 4 0 0 0 0 5.66l96 96A4 4 0 0 0 124 224v-44h28a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4Zm-4 96h-28a4 4 0 0 0-4 4v38.34L29.66 128 116 41.66V80a4 4 0 0 0 4 4h28Zm72-92v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0Zm-32 0v96a4 4 0 0 1-8 0V80a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesLeftThin);
export default Memo;
