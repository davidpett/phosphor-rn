import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopyrightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm35.2-65.59a44 44 0 1 1 0-52.82 4 4 0 0 1-6.4 4.81 36 36 0 1 0 0 43.2 4 4 0 0 1 6.4 4.81Z" />
  </Svg>
);
const Memo = memo(SvgCopyrightThin);
export default Memo;
