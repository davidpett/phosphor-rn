import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForwardCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm6.22-95.33-48-32A4 4 0 0 0 80 96v64a4 4 0 0 0 2.11 3.53 4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66ZM88 152.53v-49.06L124.79 128Zm102.22-27.86-48-32A4 4 0 0 0 136 96v64a4 4 0 0 0 2.11 3.53 4 4 0 0 0 4.11-.2l48-32a4 4 0 0 0 0-6.66ZM144 152.53v-49.06L180.79 128Z" />
  </Svg>
);
const Memo = memo(SvgFastForwardCircleThin);
export default Memo;
