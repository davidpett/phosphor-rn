import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleMedium = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56 136a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h8V64h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 6.78 3.74L80 104.91l33.22-53.15A8 8 0 0 1 120 48h16a8 8 0 0 1 0 16h-8v64h8a8 8 0 0 1 0 16h-24a8 8 0 0 1 0-16V83.89l-25.22 40.35a8 8 0 0 1-13.56 0L48 83.89V128a8 8 0 0 1 8 8Zm112-24h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16Zm72 16h-72a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16Zm0 32H72a8 8 0 0 0 0 16h168a8 8 0 0 0 0-16Zm0 32H72a8 8 0 0 0 0 16h168a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgArticleMedium);
export default Memo;
