import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalFullThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 72v128a4 4 0 0 1-8 0V72a4 4 0 0 1 8 0Zm36-44a4 4 0 0 0-4 4v168a4 4 0 0 0 8 0V32a4 4 0 0 0-4-4Zm-80 80a4 4 0 0 0-4 4v88a4 4 0 0 0 8 0v-88a4 4 0 0 0-4-4Zm-40 40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4Zm-40 40a4 4 0 0 0-4 4v8a4 4 0 0 0 8 0v-8a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalFullThin);
export default Memo;
