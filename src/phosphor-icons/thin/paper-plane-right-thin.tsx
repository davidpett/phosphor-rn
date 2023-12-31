import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.89 117.43-168-95.88A12 12 0 0 0 36.7 36l31.05 90.48v.05a4.09 4.09 0 0 1 0 2.74L36.72 220A12 12 0 0 0 48 236a12.13 12.13 0 0 0 5.93-1.57l167.94-96.08a12 12 0 0 0 0-20.92Zm-4 14L50 227.47a4 4 0 0 1-5.7-4.88l31-90.59H136a4 4 0 0 0 0-8H75.35a.65.65 0 0 1 0-.13l-31.1-90.5A4 4 0 0 1 50 28.52l168 95.87a4 4 0 0 1 0 7Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneRightThin);
export default Memo;
