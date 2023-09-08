import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUUpLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 144a62.07 62.07 0 0 1-62 62H80a6 6 0 0 1 0-12h88a50 50 0 0 0 0-100H46.49l37.75 37.76a6 6 0 1 1-8.48 8.48l-48-48a6 6 0 0 1 0-8.48l48-48a6 6 0 0 1 8.48 8.48L46.49 82H168a62.07 62.07 0 0 1 62 62Z" />
  </Svg>
);
const Memo = memo(SvgArrowUUpLeftLight);
export default Memo;
