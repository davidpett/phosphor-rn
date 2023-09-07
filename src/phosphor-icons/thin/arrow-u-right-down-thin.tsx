import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowURightDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m218.83 178.83-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L164 214.34V88a52 52 0 0 0-104 0v88a4 4 0 0 1-8 0V88a60 60 0 0 1 120 0v126.34l41.17-41.17a4 4 0 0 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowURightDownThin);
export default Memo;
