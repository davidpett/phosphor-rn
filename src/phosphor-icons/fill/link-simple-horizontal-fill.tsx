import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM112 168H80a40 40 0 0 1 0-80h32a8 8 0 0 1 0 16H80a24 24 0 0 0 0 48h32a8 8 0 0 1 0 16Zm48-48a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm16 48h-32a8 8 0 0 1 0-16h32a24 24 0 0 0 0-48h-32a8 8 0 0 1 0-16h32a40 40 0 0 1 0 80Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleHorizontalFill);
export default Memo;
