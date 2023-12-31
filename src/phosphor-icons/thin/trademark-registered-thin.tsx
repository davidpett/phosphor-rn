import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrademarkRegisteredThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm17.12-81.53A28 28 0 0 0 136 84h-32a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0v-28h28.52l20.15 30.23a4 4 0 0 0 6.66-4.44ZM108 92h28a20 20 0 0 1 0 40h-28Z" />
  </Svg>
);
const Memo = memo(SvgTrademarkRegisteredThin);
export default Memo;
