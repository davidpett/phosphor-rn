import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMinusCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 128a4 4 0 0 1-4 4H88a4 4 0 0 1 0-8h80a4 4 0 0 1 4 4Zm56 0A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100Zm-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92Z" />
  </Svg>
);
const Memo = memo(SvgMinusCircleThin);
export default Memo;
