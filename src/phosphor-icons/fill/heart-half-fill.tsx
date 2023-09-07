import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartHalfFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a8 8 0 0 0 7.58 0C136.21 220.67 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8V96a48 48 0 0 1 41.61-47.56A83.85 83.85 0 0 1 178 48a46.06 46.06 0 0 1 46 46c0 53.61-77.75 102.15-96 112.8Z" />
  </Svg>
);
const Memo = memo(SvgHeartHalfFill);
export default Memo;
