import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeStructureThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 108h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-12a28 28 0 0 0-28 28v28H76v-12a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-12h40v28a28 28 0 0 0 28 28h12v20a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12h-48a12 12 0 0 0-12 12v20h-12a20 20 0 0 1-20-20V96a20 20 0 0 1 20-20h12v20a12 12 0 0 0 12 12ZM68 144a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4Zm96 16a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Zm0-112a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v48a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgTreeStructureThin);
export default Memo;
