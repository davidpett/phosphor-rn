import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretUpDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 176h96l-48 48Zm48-144L80 80h96Z" opacity={0.2} />
    <Path d="M176 168H80a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 176 168Zm-48 44.69L99.31 184h57.38ZM80 88h96a8 8 0 0 0 5.66-13.66l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 80 88Zm48-44.69L156.69 72H99.31Z" />
  </Svg>
);
const Memo = memo(SvgCaretUpDownDuotone);
export default Memo;
