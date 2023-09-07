import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckFat = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m243.28 68.24-24-23.56a16 16 0 0 0-22.58 0L104 136l-.11-.11-36.64-35.27a16 16 0 0 0-22.57.06l-24 24a16 16 0 0 0 0 22.61l71.62 72a16 16 0 0 0 22.63 0l128.4-128.38a16 16 0 0 0-.05-22.67ZM103.62 208 32 136l24-24 .11.11 36.64 35.27a16 16 0 0 0 22.52 0L208.06 56 232 79.6Z" />
  </Svg>
);
const Memo = memo(SvgCheckFat);
export default Memo;
