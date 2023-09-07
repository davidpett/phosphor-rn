import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 74h-82V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h82a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14Zm2 94a2 2 0 0 1-2 2h-88a6 6 0 0 0-6 6v33.51L32.49 128 114 46.49V80a6 6 0 0 0 6 6h88a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLeftLight);
export default Memo;
