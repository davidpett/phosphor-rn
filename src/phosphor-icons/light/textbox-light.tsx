import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextboxLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 42a6 6 0 0 0-6 6v18H24a14 14 0 0 0-14 14v96a14 14 0 0 0 14 14h82v18a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6ZM24 178a2 2 0 0 1-2-2V80a2 2 0 0 1 2-2h82v100Zm222-98v96a14 14 0 0 1-14 14h-88a6 6 0 0 1 0-12h88a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2h-88a6 6 0 0 1 0-12h88a14 14 0 0 1 14 14ZM86 112a6 6 0 0 1-6 6H70v26a6 6 0 0 1-12 0v-26H48a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgTextboxLight);
export default Memo;
