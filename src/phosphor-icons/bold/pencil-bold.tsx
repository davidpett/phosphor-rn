import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.14 70.54-44.68-44.69a20 20 0 0 0-28.29 0L33.86 149.17A19.85 19.85 0 0 0 28 163.31V208a20 20 0 0 0 20 20h44.69a19.86 19.86 0 0 0 14.14-5.86L230.14 98.82a20 20 0 0 0 0-28.28ZM93 180l71-71 11 11-71 71Zm-17-17-11-11 71-71 11 11Zm-24 10 15.51 15.51L83 204H52Zm140-70-39-39 18.34-18.34 39 39Z" />
  </Svg>
);
const Memo = memo(SvgPencilBold);
export default Memo;
