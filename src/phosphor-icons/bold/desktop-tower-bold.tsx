import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDesktopTowerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 96v68a4 4 0 0 0 4 4h76a12 12 0 0 1 0 24h-8v12h8a12 12 0 0 1 0 24H68a12 12 0 0 1 0-24h8v-12H32a28 28 0 0 1-28-28V96a28 28 0 0 1 28-28h76a12 12 0 0 1 0 24H32a4 4 0 0 0-4 4Zm152-8h24a12 12 0 0 0 0-24h-24a12 12 0 0 0 0 24Zm0 36h24a12 12 0 0 0 0-24h-24a12 12 0 0 0 0 24Zm72-76v160a20 20 0 0 1-20 20h-80a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h80a20 20 0 0 1 20 20Zm-24 4h-72v152h72Zm-36 108a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgDesktopTowerBold);
export default Memo;
