import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 160H48l80-80Z" opacity={0.2} />
    <Path d="m213.66 154.34-80-80a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 168h160a8 8 0 0 0 5.66-13.66ZM67.31 152 128 91.31 188.69 152Z" />
  </Svg>
);
const Memo = memo(SvgCaretUpDuotone);
export default Memo;
