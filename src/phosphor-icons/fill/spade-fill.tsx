import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpadeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 136a56 56 0 0 1-83.4 48.82l11.06 36.88A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l11.06-36.88A56 56 0 0 1 24 136c0-32 17.65-62.84 51-89.27a234.14 234.14 0 0 1 49.89-30.11 7.93 7.93 0 0 1 6.16 0A234.14 234.14 0 0 1 181 46.73C214.35 73.16 232 104 232 136Z" />
  </Svg>
);
const Memo = memo(SvgSpadeFill);
export default Memo;
