import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlusCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm44-92a4 4 0 0 1-4 4h-36v36a4 4 0 0 1-8 0v-36H88a4 4 0 0 1 0-8h36V88a4 4 0 0 1 8 0v36h36a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPlusCircleThin);
export default Memo;
