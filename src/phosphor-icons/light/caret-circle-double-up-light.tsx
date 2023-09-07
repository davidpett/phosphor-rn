import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.12 55.87A102 102 0 0 0 55.87 200.12 102 102 0 1 0 200.12 55.87Zm-8.48 135.77a90 90 0 1 1 0-127.28 90.1 90.1 0 0 1 0 127.28Zm-27.4-27.88a6 6 0 1 1-8.48 8.48L128 144.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Zm0-56a6 6 0 1 1-8.48 8.48L128 88.49l-27.76 27.75a6 6 0 0 1-8.48-8.48l32-32a6 6 0 0 1 8.48 0Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleUpLight);
export default Memo;
