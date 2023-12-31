import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotePencilBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 55.51-32-32a12 12 0 0 0-17 0l-96 96A12 12 0 0 0 84 128v32a12 12 0 0 0 12 12h32a12 12 0 0 0 8.49-3.51l96-96a12 12 0 0 0 0-16.98ZM192 49l15 15-11 11-15-15Zm-69 99h-15v-15l56-56 15 15Zm105-15.43V208a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h75.43a12 12 0 0 1 0 24H52v152h152v-71.43a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgNotePencilBold);
export default Memo;
