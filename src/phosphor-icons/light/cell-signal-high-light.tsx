import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalHighLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166 72v128a6 6 0 0 1-12 0V72a6 6 0 0 1 12 0Zm-46 34a6 6 0 0 0-6 6v88a6 6 0 0 0 12 0v-88a6 6 0 0 0-6-6Zm-40 40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6Zm-40 40a6 6 0 0 0-6 6v8a6 6 0 0 0 12 0v-8a6 6 0 0 0-6-6Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalHighLight);
export default Memo;
