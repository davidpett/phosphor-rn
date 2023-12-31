import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVideoCameraBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M249.45 69.31a12 12 0 0 0-12.51 1L212 88.43V72a20 20 0 0 0-20-20H32a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20v-16.43l24.94 18.14A12 12 0 0 0 256 176V80a12 12 0 0 0-6.55-10.69ZM188 180H36V76h152Zm44-27.57-20-14.54v-19.78l20-14.54Z" />
  </Svg>
);
const Memo = memo(SvgVideoCameraBold);
export default Memo;
