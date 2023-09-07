import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGridFourThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12Zm4 12v68h-72V52h68a4 4 0 0 1 4 4ZM56 52h68v72H52V56a4 4 0 0 1 4-4Zm-4 148v-68h72v72H56a4 4 0 0 1-4-4Zm148 4h-68v-72h72v68a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgGridFourThin);
export default Memo;
