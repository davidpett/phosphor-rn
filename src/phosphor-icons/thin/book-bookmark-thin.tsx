import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookBookmarkThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H72a28 28 0 0 0-28 28v168a4 4 0 0 0 4 4h144a4 4 0 0 0 0-8H52v-4a20 20 0 0 1 20-20h136a4 4 0 0 0 4-4V32a4 4 0 0 0-4-4Zm-92 8h56v84l-25.61-19.2a4 4 0 0 0-4.8 0L116 120Zm88 152H72a27.94 27.94 0 0 0-20 8.42V56a20 20 0 0 1 20-20h36v92a4 4 0 0 0 6.4 3.2L144 109l29.61 22.2a4 4 0 0 0 2.4.8 4 4 0 0 0 4-4V36h24Z" />
  </Svg>
);
const Memo = memo(SvgBookBookmarkThin);
export default Memo;
