import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowClockwiseFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 56v48a8 8 0 0 1-8 8h-48a8 8 0 0 1-5.66-13.66l17-17-10.55-9.65-.25-.24a80 80 0 1 0-1.67 114.78 8 8 0 1 1 11 11.63A95.44 95.44 0 0 1 128 224h-1.32a96 96 0 1 1 69.07-164l10.93 10 19.66-19.7A8 8 0 0 1 240 56Z" />
  </Svg>
);
const Memo = memo(SvgArrowClockwiseFill);
export default Memo;
