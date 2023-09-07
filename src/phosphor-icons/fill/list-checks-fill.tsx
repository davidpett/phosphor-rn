import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListChecksFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M93.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-16-16a8 8 0 0 1 11.32-11.32L56 132.69l26.34-26.35a8 8 0 0 1 11.32 0Zm-11.32-64L56 68.69 45.66 58.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32Zm0 128L56 196.69l-10.34-10.35a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32 0l32-32a8 8 0 0 0-11.32-11.32ZM216 48h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Zm0 128h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-64h-88a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgListChecksFill);
export default Memo;
