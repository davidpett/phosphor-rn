import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTimerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 42a94 94 0 1 0 94 94 94.11 94.11 0 0 0-94-94Zm0 176a82 82 0 1 1 82-82 82.1 82.1 0 0 1-82 82Zm44.24-126.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 1 1-8.48-8.48l40-40a6 6 0 0 1 8.48 0ZM98 16a6 6 0 0 1 6-6h48a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgTimerLight);
export default Memo;
