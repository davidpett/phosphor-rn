import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencil = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.31 73.37-44.68-44.69a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69L227.31 96a16 16 0 0 0 0-22.63ZM51.31 160 136 75.31 152.69 92 68 176.68ZM48 179.31 76.69 208H48Zm48 25.38L79.31 188 164 103.31 180.69 120Zm96-96L147.31 64l24-24L216 84.68Z" />
  </Svg>
);
const Memo = memo(SvgPencil);
export default Memo;
