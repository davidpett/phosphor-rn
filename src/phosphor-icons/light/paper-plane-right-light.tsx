import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m222.88 115.69-168-95.88a14 14 0 0 0-20 16.85l31 90.48v.07a2.11 2.11 0 0 1 0 1.42l-31 90.64A14 14 0 0 0 48 238a14.11 14.11 0 0 0 6.92-1.83l167.92-96.07a14 14 0 0 0 0-24.41Zm-5.95 14L49 225.73a1.87 1.87 0 0 1-2.27-.22 1.92 1.92 0 0 1-.56-2.28L76.7 134H136a6 6 0 0 0 0-12H76.78L46.14 32.7A2 2 0 0 1 49 30.25l168 95.89a1.93 1.93 0 0 1 1 1.74 2 2 0 0 1-1.07 1.78Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneRightLight);
export default Memo;
