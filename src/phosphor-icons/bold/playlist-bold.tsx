import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlaylistBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm12 76h116a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm68 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm143.49-52.55a12 12 0 0 1-14.94 8L212 128.13V192a36 36 0 1 1-24-33.94V112a12 12 0 0 1 15.45-11.49l40 12a12 12 0 0 1 8.04 14.94ZM188 192a12 12 0 1 0-12 12 12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgPlaylistBold);
export default Memo;
