import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKanban = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 48H40a8 8 0 0 0-8 8v152a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16v-48h48v16a16 16 0 0 0 16 16h40a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8ZM88 208H48v-80h40Zm0-96H48V64h40Zm64 32h-48V64h48Zm56 32h-40v-48h40Zm0-64h-40V64h40Z" />
  </Svg>
);
const Memo = memo(SvgKanban);
export default Memo;
