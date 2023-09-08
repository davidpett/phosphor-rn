import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowURightUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 80h-96l48-48Z" opacity={0.2} />
    <Path d="m221.66 74.34-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 88h40v80a48 48 0 0 1-96 0V80a8 8 0 0 0-16 0v88a64 64 0 0 0 128 0V88h40a8 8 0 0 0 5.66-13.66ZM139.31 72 168 43.31 196.69 72Z" />
  </Svg>
);
const Memo = memo(SvgArrowURightUpDuotone);
export default Memo;
