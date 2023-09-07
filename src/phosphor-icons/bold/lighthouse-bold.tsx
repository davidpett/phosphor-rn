import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLighthouseBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 84a12 12 0 0 0-12 12v8h-15.13l-4.93-49.2A12 12 0 0 0 184 47L141.1 8.89l-.3-.25a20 20 0 0 0-25.6 0l-.3.25L72 47a12 12 0 0 0-4 7.76L63.13 104H48v-8a12 12 0 0 0-24 0v20a12 12 0 0 0 12 12h24.72l-8.63 86.1A20 20 0 0 0 72 236h112a20 20 0 0 0 19.9-21.95L195.28 128H220a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12Zm-92-54.64L144.46 44h-32.92ZM90.86 68h74.28l3.61 36H140v-8a12 12 0 0 0-24 0v8H87.25ZM76.42 212l3.21-32h96.74l3.21 32ZM174 156H82l2.8-28h86.32Z" />
  </Svg>
);
const Memo = memo(SvgLighthouseBold);
export default Memo;
