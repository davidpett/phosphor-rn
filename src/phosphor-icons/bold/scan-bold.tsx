import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScanBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 40v40a12 12 0 0 1-24 0V52h-28a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12ZM80 204H52v-28a12 12 0 0 0-24 0v40a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24Zm136-40a12 12 0 0 0-12 12v28h-28a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12ZM40 92a12 12 0 0 0 12-12V52h28a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12Zm124 92H92a20 20 0 0 1-20-20V92a20 20 0 0 1 20-20h72a20 20 0 0 1 20 20v72a20 20 0 0 1-20 20Zm-4-88H96v64h64Z" />
  </Svg>
);
const Memo = memo(SvgScanBold);
export default Memo;
