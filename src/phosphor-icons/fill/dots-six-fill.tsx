import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM68 168a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm60 56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm60 56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-56a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixFill);
export default Memo;
