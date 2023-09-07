import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.14 70.54-44.68-44.69a20 20 0 0 0-28.29 0L33.86 149.17A19.85 19.85 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.86 19.86 0 0 0 14.14-5.86L230.14 98.82a20 20 0 0 0 0-28.28ZM91 204H52v-39l84-84 39 39Zm101-101-39-39 18.34-18.34 39 39Z" />
  </Svg>
);
const Memo = memo(SvgPencilSimpleBold);
export default Memo;
