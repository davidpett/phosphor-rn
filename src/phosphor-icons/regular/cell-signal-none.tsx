import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalNone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 192v8a8 8 0 0 1-16 0v-8a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalNone);
export default Memo;
