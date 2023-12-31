import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopyright = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm-32-88a32 32 0 0 0 57.6 19.2 8 8 0 0 1 12.8 9.61 48 48 0 1 1 0-57.62 8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128Z" />
  </Svg>
);
const Memo = memo(SvgCopyright);
export default Memo;
