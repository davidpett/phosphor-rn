import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleNineThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 80.29a32 32 0 1 0-6.23 58.16L116.57 174a4 4 0 0 0 1.38 5.48 3.92 3.92 0 0 0 2 .57 4 4 0 0 0 3.43-1.95l32.33-54.1A32 32 0 0 0 144 80.29Zm4.8 39.71-.06.09a22.62 22.62 0 1 1 .06-.09ZM128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleNineThin);
export default Memo;
