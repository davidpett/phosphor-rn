import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookBookmarkLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 26H72a30 30 0 0 0-30 30v168a6 6 0 0 0 6 6h144a6 6 0 0 0 0-12H54v-2a18 18 0 0 1 18-18h136a6 6 0 0 0 6-6V32a6 6 0 0 0-6-6Zm-90 12h52v78l-22.41-16.8a6 6 0 0 0-7.2 0L118 116Zm84 148H72a29.87 29.87 0 0 0-18 6V56a18 18 0 0 1 18-18h34v90a6 6 0 0 0 9.6 4.8l28.4-21.3 28.41 21.3A6 6 0 0 0 182 128V38h20Z" />
  </Svg>
);
const Memo = memo(SvgBookBookmarkLight);
export default Memo;
