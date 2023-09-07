import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookmarkSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 36H72a12 12 0 0 0-12 12v176a4 4 0 0 0 6.12 3.39L128 188.72l61.89 38.67a4 4 0 0 0 2.11.61 4.06 4.06 0 0 0 1.94-.5A4 4 0 0 0 196 224V48a12 12 0 0 0-12-12Zm4 180.78-57.89-36.17a4 4 0 0 0-4.24 0L68 216.78V48a4 4 0 0 1 4-4h112a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgBookmarkSimpleThin);
export default Memo;
