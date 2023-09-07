import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCenteredBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36H40a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h57.23l13.62 22.29a20 20 0 0 0 34.25.08L158.77 204H216a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 144h-55.47a20 20 0 0 0-17.1 9.63L128 208.33l-11.41-18.67A20.1 20.1 0 0 0 99.47 180H44V60h168Z" />
  </Svg>
);
const Memo = memo(SvgChatCenteredBold);
export default Memo;
