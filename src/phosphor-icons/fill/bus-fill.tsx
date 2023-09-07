import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBusFill = (props: SvgProps) => (
  <Svg
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0ZM16 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8Zm200-8v144a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-8H96v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32Zm-112 84a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm72 0a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm24-76H56v40h144Z" />
  </Svg>
);
const Memo = memo(SvgBusFill);
export default Memo;
