import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalNoneThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M44 192v8a4 4 0 0 1-8 0v-8a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalNoneThin);
export default Memo;
