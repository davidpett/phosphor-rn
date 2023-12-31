import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderNotchMinusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m128 80-29.87 22.4a8 8 0 0 1-4.8 1.6H32V64a8 8 0 0 1 8-8h53.33a8 8 0 0 1 4.8 1.6Z"
      opacity={0.2}
    />
    <Path d="M216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16ZM40 64h53.33l21.34 16-21.34 16H40Zm176 136H40v-88h53.33a16.12 16.12 0 0 0 9.6-3.2L130.67 88H216Zm-64-56a8 8 0 0 1 0 16h-48a8 8 0 0 1 0-16Z" />
  </Svg>
);
const Memo = memo(SvgFolderNotchMinusDuotone);
export default Memo;
