import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareHalfBottomThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4Zm52 80v72H84v-72Zm8 0h24v72h-24Zm32 0h24v72h-24Zm-96 68v-68h24v72H56a4 4 0 0 1-4-4Zm148 4h-20v-72h24v68a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgSquareHalfBottomThin);
export default Memo;
