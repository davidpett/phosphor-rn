import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 128a4 4 0 0 1-4 4H81.66l65.17 65.17a4 4 0 0 1-5.66 5.66l-72-72a4 4 0 0 1 0-5.66l72-72a4 4 0 1 1 5.66 5.66L81.66 124H224a4 4 0 0 1 4 4ZM40 36a4 4 0 0 0-4 4v176a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineLeftThin);
export default Memo;
