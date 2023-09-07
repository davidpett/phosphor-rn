import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m176 128-80 80V48Z" opacity={0.2} />
    <Path d="m181.66 122.34-80-80A8 8 0 0 0 88 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32ZM104 188.69V67.31L164.69 128Z" />
  </Svg>
);
const Memo = memo(SvgCaretRightDuotone);
export default Memo;
