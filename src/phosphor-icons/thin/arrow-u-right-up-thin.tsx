import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowURightUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M218.83 82.83a4 4 0 0 1-5.66 0L172 41.66V168a60 60 0 0 1-120 0V80a4 4 0 0 1 8 0v88a52 52 0 0 0 104 0V41.66l-41.17 41.17a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowURightUpThin);
export default Memo;
