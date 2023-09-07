import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookOpenFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 64v128a16 16 0 0 1-16 16h-64a24 24 0 0 0-24 24 8 8 0 0 1-16 0 24 24 0 0 0-24-24H32a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h56a32 32 0 0 1 32 32v88a8 8 0 0 0 16 0V80a32 32 0 0 1 32-32h56a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgBookOpenFill);
export default Memo;
