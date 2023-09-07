import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecord = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm0-160a72 72 0 1 0 72 72 72.08 72.08 0 0 0-72-72Zm0 128a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" />
  </Svg>
);
const Memo = memo(SvgRecord);
export default Memo;
