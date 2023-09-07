import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareHalfLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm-66 76h68v20h-68Zm0-12V86h68v20Zm0 44h68v20h-68Zm68-94v18h-68V54h66a2 2 0 0 1 2 2ZM54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2Zm146 2h-66v-20h68v18a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgSquareHalfLight);
export default Memo;
