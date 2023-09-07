import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 176a4 4 0 0 1-4 4 12 12 0 0 1-12-12v-40a4 4 0 0 0-4-4 4 4 0 0 1 0-8 12 12 0 0 1 12 12v40a4 4 0 0 0 4 4 4 4 0 0 1 4 4Zm-16-84a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm104 36A100 100 0 1 1 128 28a100.11 100.11 0 0 1 100 100Zm-8 0a92 92 0 1 0-92 92 92.1 92.1 0 0 0 92-92Z" />
  </Svg>
);
const Memo = memo(SvgInfoThin);
export default Memo;
