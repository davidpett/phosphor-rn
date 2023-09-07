import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 72H86.51L194.3 39.67a8 8 0 0 0-4.6-15.33l-160 48A8 8 0 0 0 24 80v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16ZM96 184H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm0-32H56a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Zm72 52a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgRadioFill);
export default Memo;
