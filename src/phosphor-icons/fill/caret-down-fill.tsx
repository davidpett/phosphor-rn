import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 88h160a8 8 0 0 1 5.66 13.66Z" />
  </Svg>
);
const Memo = memo(SvgCaretDownFill);
export default Memo;
