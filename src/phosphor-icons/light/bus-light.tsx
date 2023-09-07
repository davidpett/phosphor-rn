import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 34H72a30 30 0 0 0-30 30v144a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14v-18h68v18a14 14 0 0 0 14 14h24a14 14 0 0 0 14-14V64a30 30 0 0 0-30-30ZM54 178v-60h148v60Zm0-100h148v28H54Zm18-32h112a18 18 0 0 1 18 18v2H54v-2a18 18 0 0 1 18-18Zm10 162a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2v-18h28Zm118 2h-24a2 2 0 0 1-2-2v-18h28v18a2 2 0 0 1-2 2Zm-98-62a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm72 0a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm72-68v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0ZM22 80v24a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgBusLight);
export default Memo;
