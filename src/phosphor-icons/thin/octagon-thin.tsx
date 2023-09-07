import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOctagonThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224.49 83.06-51.55-51.55a12 12 0 0 0-8.49-3.51h-72.9a12 12 0 0 0-8.49 3.51L31.51 83.06A12 12 0 0 0 28 91.55v72.9a12 12 0 0 0 3.51 8.49l51.55 51.55a12 12 0 0 0 8.49 3.51h72.9a12 12 0 0 0 8.49-3.51l51.55-51.55a12 12 0 0 0 3.51-8.49v-72.9a12 12 0 0 0-3.51-8.49ZM220 164.45a4 4 0 0 1-1.17 2.83l-51.55 51.55a4 4 0 0 1-2.83 1.17h-72.9a4 4 0 0 1-2.83-1.17l-51.55-51.55a4 4 0 0 1-1.17-2.83v-72.9a4 4 0 0 1 1.17-2.83l51.55-51.55A4 4 0 0 1 91.55 36h72.9a4 4 0 0 1 2.83 1.17l51.55 51.55a4 4 0 0 1 1.17 2.83Z" />
  </Svg>
);
const Memo = memo(SvgOctagonThin);
export default Memo;
