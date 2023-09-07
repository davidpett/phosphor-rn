import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm38-74a6 6 0 0 1-6 6h-10v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1-5.69-7.9l24-72a6 6 0 1 1 11.38 3.8L104.32 138H138v-26a6 6 0 0 1 12 0v26h10a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleFourLight);
export default Memo;
