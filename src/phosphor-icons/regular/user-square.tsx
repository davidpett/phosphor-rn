import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserSquare = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM96 120a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm-27.33 88a64.36 64.36 0 0 1 19.13-25.8 64 64 0 0 1 80.4 0 64.36 64.36 0 0 1 19.13 25.8ZM208 208h-3.67a79.9 79.9 0 0 0-46.68-50.29 48 48 0 1 0-59.3 0A79.9 79.9 0 0 0 51.67 208H48V48h160v160Z" />
  </Svg>
);
const Memo = memo(SvgUserSquare);
export default Memo;
