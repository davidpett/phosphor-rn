import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockOpen = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 80H96V56a32 32 0 0 1 32-32c15.37 0 29.2 11 32.16 25.59a8 8 0 0 0 15.68-3.18C171.32 24.15 151.2 8 128 8a48.05 48.05 0 0 0-48 48v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16Zm0 128H48V96h160v112Zm-68-56a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgLockOpen);
export default Memo;
