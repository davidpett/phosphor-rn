import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBezierCurveLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.44 146.2A94.66 94.66 0 0 0 173.92 86H240a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H16a6 6 0 0 0 0 12h66.08a94.66 94.66 0 0 0-45.52 60.2 30 30 0 1 0 12.09 1.08 82.53 82.53 0 0 1 51.4-56.39 30 30 0 0 0 55.9 0 82.53 82.53 0 0 1 51.4 56.39 30 30 0 1 0 12.09-1.08ZM58 176a18 18 0 1 1-18-18 18 18 0 0 1 18 18Zm70-78a18 18 0 1 1 18-18 18 18 0 0 1-18 18Zm88 96a18 18 0 1 1 18-18 18 18 0 0 1-18 18Z" />
  </Svg>
);
const Memo = memo(SvgBezierCurveLight);
export default Memo;
