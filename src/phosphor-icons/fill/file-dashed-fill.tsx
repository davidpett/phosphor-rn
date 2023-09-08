import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileDashedFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8ZM213.66 82.34l-56-56A8 8 0 0 0 152 24h-32a8 8 0 0 0 0 16h24v48a8 8 0 0 0 8 8h48v40a8 8 0 0 0 16 0V88a8 8 0 0 0-2.34-5.66ZM80 24H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm128 144a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8ZM48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Zm104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgFileDashedFill);
export default Memo;
