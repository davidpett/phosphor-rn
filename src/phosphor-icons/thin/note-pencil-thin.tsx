import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotePencilThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.83 61.17-32-32a4 4 0 0 0-5.66 0l-96 96A4 4 0 0 0 92 128v32a4 4 0 0 0 4 4h32a4 4 0 0 0 2.83-1.17l96-96a4 4 0 0 0 0-5.66ZM126.34 156H100v-26.34l68-68L194.34 88ZM200 82.34 173.66 56 192 37.66 218.34 64ZM220 120v88a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V48a12 12 0 0 1 12-12h88a4 4 0 0 1 0 8H48a4 4 0 0 0-4 4v160a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4v-88a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgNotePencilThin);
export default Memo;
