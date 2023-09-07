import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDivideFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-80 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16Zm0 128a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm56-56H72a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgDivideFill);
export default Memo;
