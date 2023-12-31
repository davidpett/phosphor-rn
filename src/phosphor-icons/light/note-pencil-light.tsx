import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotePencilLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 59.76-32-32a6 6 0 0 0-8.48 0l-96 96A6 6 0 0 0 90 128v32a6 6 0 0 0 6 6h32a6 6 0 0 0 4.24-1.76l96-96a6 6 0 0 0 0-8.48ZM125.51 154H102v-23.51l66-66L191.51 88ZM200 79.51 176.49 56 192 40.49 215.51 64ZM222 120v88a14 14 0 0 1-14 14H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h88a6 6 0 0 1 0 12H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2h160a2 2 0 0 0 2-2v-88a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgNotePencilLight);
export default Memo;
