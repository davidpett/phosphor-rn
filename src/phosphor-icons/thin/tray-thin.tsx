import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrayThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12ZM48 44h160a4 4 0 0 1 4 4v108h-32.69a12 12 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.32a12 12 0 0 0-8.48-3.51H44V48a4 4 0 0 1 4-4Zm160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.32a12 12 0 0 0 8.48 3.51h41.38a12 12 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgTrayThin);
export default Memo;
