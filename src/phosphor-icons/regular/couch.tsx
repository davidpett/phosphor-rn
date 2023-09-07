import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCouch = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 106.17V72a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v34.17A16 16 0 0 0 8 120v48a16 16 0 0 0 16 16h8v16a8 8 0 0 0 16 0v-16h160v16a8 8 0 0 0 16 0v-16h8a16 16 0 0 0 16-16v-48a16 16 0 0 0-8-13.83ZM224 104h-8a16 16 0 0 0-16 16v16h-64V72h88ZM120 72v64H56v-16a16 16 0 0 0-16-16h-8V72Zm112 96H24v-48h16v16a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16Z" />
  </Svg>
);
const Memo = memo(SvgCouch);
export default Memo;
