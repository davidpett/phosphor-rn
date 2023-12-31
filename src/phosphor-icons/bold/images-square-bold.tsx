import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImagesSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H88a20 20 0 0 0-20 20v12H48a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20v-20h12a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20ZM92 52h112v59.72l-9.86-9.86a20 20 0 0 0-28.28 0L103.72 164H92Zm80 152H52V84h16v84a20 20 0 0 0 20 20h84Zm-34.34-40L180 121.66l24 24V164ZM108 88a20 20 0 1 1 20 20 20 20 0 0 1-20-20Z" />
  </Svg>
);
const Memo = memo(SvgImagesSquareBold);
export default Memo;
