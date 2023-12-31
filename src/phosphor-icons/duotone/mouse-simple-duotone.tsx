import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMouseSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 80v96a56 56 0 0 1-56 56h-32a56 56 0 0 1-56-56V80a56 56 0 0 1 56-56h32a56 56 0 0 1 56 56Z"
      opacity={0.2}
    />
    <Path d="M144 16h-32a64.07 64.07 0 0 0-64 64v96a64.07 64.07 0 0 0 64 64h32a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64Zm48 160a48.05 48.05 0 0 1-48 48h-32a48.05 48.05 0 0 1-48-48V80a48.05 48.05 0 0 1 48-48h32a48.05 48.05 0 0 1 48 48ZM136 64v48a8 8 0 0 1-16 0V64a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgMouseSimpleDuotone);
export default Memo;
