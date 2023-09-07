import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockAfternoonLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm62-90a6 6 0 0 1-6 6h-41.51l29.75 29.76a6 6 0 1 1-8.48 8.48l-40-40A6 6 0 0 1 128 122h56a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgClockAfternoonLight);
export default Memo;
