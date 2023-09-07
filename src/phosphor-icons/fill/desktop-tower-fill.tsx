import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDesktopTowerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 76v112a4 4 0 0 1-4 4H96v16h15.73a8.18 8.18 0 0 1 8.25 7.47 8 8 0 0 1-8 8.53H64.27a8.18 8.18 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h16v-16H32a24 24 0 0 1-24-24V96a24 24 0 0 1 24-24h84a4 4 0 0 1 4 4Zm128-28v160a16 16 0 0 1-16 16h-80a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16Zm-44.1 133.57a12 12 0 1 0-10.34 10.33 12 12 0 0 0 10.34-10.33Zm20.1-78.1a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.25 7.47 8 8 0 0 0 8 8.53h48a8 8 0 0 0 7.98-8.53Zm0-32a8.18 8.18 0 0 0-8.27-7.47h-47.46a8.18 8.18 0 0 0-8.27 7.47 8 8 0 0 0 8 8.53h48a8 8 0 0 0 8-8.53Z" />
  </Svg>
);
const Memo = memo(SvgDesktopTowerFill);
export default Memo;
