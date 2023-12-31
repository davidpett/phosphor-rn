import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHTwo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0Zm88 144h-32l33.55-44.74a32 32 0 1 0-55.73-29.93 8 8 0 1 0 15.08 5.34 16.28 16.28 0 0 1 2.32-4.3 16 16 0 1 1 25.54 19.27L185.6 203.2A8 8 0 0 0 192 216h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgTextHTwo);
export default Memo;
