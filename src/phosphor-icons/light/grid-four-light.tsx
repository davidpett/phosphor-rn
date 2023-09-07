import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGridFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14Zm2 14v66h-68V54h66a2 2 0 0 1 2 2ZM56 54h66v68H54V56a2 2 0 0 1 2-2Zm-2 146v-66h68v68H56a2 2 0 0 1-2-2Zm146 2h-66v-68h68v66a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgGridFourLight);
export default Memo;
