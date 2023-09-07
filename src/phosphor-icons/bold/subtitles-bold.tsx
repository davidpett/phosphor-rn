import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtitlesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm-4 144H36V68h184ZM48 128a12 12 0 0 1 12-12h16a12 12 0 0 1 0 24H60a12 12 0 0 1-12-12Zm56 0a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24h-80a12 12 0 0 1-12-12Zm-56 36a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24H60a12 12 0 0 1-12-12Zm160 0a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgSubtitlesBold);
export default Memo;
