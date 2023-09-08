import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m178.83 130.83-80 80a4 4 0 0 1-5.66-5.66L170.34 128 93.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgCaretRightThin);
export default Memo;
