import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleOneThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm8-140v96a4 4 0 0 1-8 0V87.47l-17.78 11.86a4 4 0 1 1-4.44-6.66l24-16A4 4 0 0 1 136 80Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleOneThin);
export default Memo;
