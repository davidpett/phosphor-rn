import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchMinusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 68h-84l-26.67-20a20.12 20.12 0 0 0-12-4H40a20 20 0 0 0-20 20v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V88a20 20 0 0 0-20-20ZM44 68h48l16 12-16 12H44Zm168 128H44v-80h49.33a20.12 20.12 0 0 0 12-4L132 92h80Zm-60-56a12 12 0 0 1 0 24h-48a12 12 0 0 1 0-24Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchMinusBold);
export default Memo;
