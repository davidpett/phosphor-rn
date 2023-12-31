import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelevisionDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 72v136H40a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8Z" opacity={0.2} />
    <Path d="M216 64h-68.69l34.35-34.34a8 8 0 1 0-11.32-11.32L128 60.69 85.66 18.34a8 8 0 0 0-11.32 11.32L108.69 64H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16ZM40 80h104v120H40Zm176 120h-56V80h56v120Zm-16-84a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm0 48a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgTelevisionDuotone);
export default Memo;
