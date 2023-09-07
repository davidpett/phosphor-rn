import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextColumnsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M118 64a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h72a6 6 0 0 1 6 6Zm-6 34H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 40H40a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm32-108h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12Zm72 28h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 40h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgTextColumnsLight);
export default Memo;
