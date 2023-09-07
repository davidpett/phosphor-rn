import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendUpLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 56v96l-48-48Z" opacity={0.2} />
    <Path d="M128 96H88V56a8 8 0 0 0-13.66-5.66l-48 48a8 8 0 0 0 0 11.32l48 48A8 8 0 0 0 88 152v-40h40a88.1 88.1 0 0 1 88 88 8 8 0 0 0 16 0A104.11 104.11 0 0 0 128 96Zm-56 36.69L43.31 104 72 75.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendUpLeftDuotone);
export default Memo;
