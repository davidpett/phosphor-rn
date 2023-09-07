import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M197.66 69.66 83.31 184H168a8 8 0 0 1 0 16H64a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v84.69L186.34 58.34a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownLeft);
export default Memo;
