import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196.24 68.24 78.48 186H168a6 6 0 0 1 0 12H64a6 6 0 0 1-6-6V88a6 6 0 0 1 12 0v89.52L187.76 59.76a6 6 0 0 1 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownLeftLight);
export default Memo;
