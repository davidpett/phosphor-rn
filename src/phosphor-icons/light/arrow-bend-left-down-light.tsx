import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendLeftDownLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 32a6 6 0 0 1-6 6 90.1 90.1 0 0 0-90 90v81.51l37.76-37.75a6 6 0 0 1 8.48 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L98 209.51V128A102.12 102.12 0 0 1 200 26a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendLeftDownLight);
export default Memo;
