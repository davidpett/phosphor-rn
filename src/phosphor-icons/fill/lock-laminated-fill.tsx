import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockLaminatedFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 80h-32V56a48 48 0 0 0-96 0v24H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16ZM96 56a32 32 0 0 1 64 0v24H96Zm88 136H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Zm0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Zm0-32H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgLockLaminatedFill);
export default Memo;
