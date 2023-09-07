import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCellSignalNoneBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M52 192v8a12 12 0 0 1-24 0v-8a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgCellSignalNoneBold);
export default Memo;
