import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m184.49 136.49-80 80a12 12 0 0 1-17-17L159 128 87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17Z" />
  </Svg>
);
const Memo = memo(SvgCaretRightBold);
export default Memo;
