import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m223.87 114-168-95.89a16 16 0 0 0-22.94 19.21l31 90.47a.42.42 0 0 0 0 .1.3.3 0 0 0 0 .1l-31 90.67A16 16 0 0 0 48 240a16.14 16.14 0 0 0 7.92-2.1l167.91-96.05a16 16 0 0 0 .05-27.89ZM48 224v-.09L78.14 136H136a8 8 0 0 0 0-16H78.22L48.06 32.12 48 32l168 95.83Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneRight);
export default Memo;
