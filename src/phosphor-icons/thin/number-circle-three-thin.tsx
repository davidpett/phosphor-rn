import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleThreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm28-68a32 32 0 0 1-54.86 22.4 4 4 0 1 1 5.72-5.6A24 24 0 1 0 124 128a4 4 0 0 1-3.28-6.29L144.32 88H104a4 4 0 0 1 0-8h48a4 4 0 0 1 3.28 6.29l-24.16 34.51A32.06 32.06 0 0 1 156 152Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleThreeThin);
export default Memo;
