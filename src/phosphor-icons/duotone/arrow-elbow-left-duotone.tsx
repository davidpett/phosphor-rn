import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m96 80-72 72V80Z" opacity={0.2} />
    <Path d="M237.66 90.34a8 8 0 0 0-11.32 0L136 180.69 71.31 116l30.35-30.34A8 8 0 0 0 96 72H24a8 8 0 0 0-8 8v72a8 8 0 0 0 13.66 5.66L60 127.31l70.34 70.35a8 8 0 0 0 11.32 0l96-96a8 8 0 0 0 0-11.32ZM32 132.69V88h44.69Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftDuotone);
export default Memo;
