import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCastleTurretBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 20H56a20 20 0 0 0-20 20v44.69a19.86 19.86 0 0 0 5.86 14.14L52 109v107a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V109l10.14-10.14A19.86 19.86 0 0 0 220 84.69V40a20 20 0 0 0-20-20Zm-60 192h-24v-60a12 12 0 0 1 24 0Zm56-129-10.14 10.17a19.86 19.86 0 0 0-5.86 14.14V212h-16v-60a36 36 0 0 0-72 0v60H76V107.31a19.86 19.86 0 0 0-5.86-14.14L60 83V44h28v24a12 12 0 0 0 24 0V44h32v24a12 12 0 0 0 24 0V44h28Z" />
  </Svg>
);
const Memo = memo(SvgCastleTurretBold);
export default Memo;
