import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm45.89-127.53a4 4 0 0 0-4.11.2l-48 32a4 4 0 0 0 0 6.66l48 32A4 4 0 0 0 176 160V96a4 4 0 0 0-2.11-3.53ZM168 152.53 131.21 128 168 103.47Zm-50.11-60.06a4 4 0 0 0-4.11.2l-48 32a4 4 0 0 0 0 6.66l48 32A4 4 0 0 0 120 160V96a4 4 0 0 0-2.11-3.53ZM112 152.53 75.21 128 112 103.47Z" />
  </Svg>
);
const Memo = memo(SvgRewindCircleThin);
export default Memo;
