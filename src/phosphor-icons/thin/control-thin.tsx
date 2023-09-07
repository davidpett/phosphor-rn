import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgControlThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M202.83 122.83a4 4 0 0 1-5.66 0L128 53.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgControlThin);
export default Memo;
