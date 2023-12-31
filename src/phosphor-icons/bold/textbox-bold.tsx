import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextboxBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 36a12 12 0 0 0-12 12v12H24A20 20 0 0 0 4 80v96a20 20 0 0 0 20 20h76v12a12 12 0 0 0 24 0V48a12 12 0 0 0-12-12ZM28 172V84h72v88Zm224-92v96a20 20 0 0 1-20 20h-80a12 12 0 0 1 0-24h76V84h-76a12 12 0 0 1 0-24h80a20 20 0 0 1 20 20ZM88 112a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20a12 12 0 0 1 0-24h24a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgTextboxBold);
export default Memo;
