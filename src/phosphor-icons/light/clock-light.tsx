import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgClockLight);
export default Memo;
