import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderMaleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 140a36 36 0 1 1-36-36 36 36 0 0 1 36 36Zm64-100v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-24 32a8 8 0 0 0-8-8h-32a8 8 0 0 0 0 16h12.69l-18 18A52.08 52.08 0 1 0 158 109.35l18-18V104a8 8 0 0 0 16 0Z" />
  </Svg>
);
const Memo = memo(SvgGenderMaleFill);
export default Memo;
