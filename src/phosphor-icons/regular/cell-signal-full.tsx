import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalFull = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 72v128a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0Zm32-48a8 8 0 0 0-8 8v168a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8Zm-80 80a8 8 0 0 0-8 8v88a8 8 0 0 0 16 0v-88a8 8 0 0 0-8-8Zm-40 40a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8Zm-40 40a8 8 0 0 0-8 8v8a8 8 0 0 0 16 0v-8a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalFull);
export default Memo;
