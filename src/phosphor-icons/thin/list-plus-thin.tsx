import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListPlusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm4 68h176a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8Zm104 56H40a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8Zm88 0h-20v-20a4 4 0 0 0-8 0v20h-20a4 4 0 0 0 0 8h20v20a4 4 0 0 0 8 0v-20h20a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgListPlusThin);
export default Memo;
