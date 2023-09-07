import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 127.89a16 16 0 0 1-8.18 14L55.91 237.9A16.14 16.14 0 0 1 48 240a16 16 0 0 1-15.05-21.34l27.35-79.95a4 4 0 0 1 3.79-2.71H136a8 8 0 0 0 8-8.53 8.19 8.19 0 0 0-8.26-7.47H64.16a4 4 0 0 1-3.79-2.7l-27.44-80a16 16 0 0 1 22.92-19.23l168 95.89a16 16 0 0 1 8.15 13.93Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneRightFill);
export default Memo;
