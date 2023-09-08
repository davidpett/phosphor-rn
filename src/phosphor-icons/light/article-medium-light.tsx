import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArticleMediumLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M54 136a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h10V62H24a6 6 0 0 1 0-12h16a6 6 0 0 1 5.09 2.8L80 108.68l34.91-55.86A6 6 0 0 1 120 50h16a6 6 0 0 1 0 12h-10v68h10a6 6 0 0 1 0 12h-24a6 6 0 0 1 0-12h2V76.92l-28.91 46.26a6 6 0 0 1-10.18 0L46 76.92V130h2a6 6 0 0 1 6 6Zm114-26h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12Zm72 20h-72a6 6 0 0 0 0 12h72a6 6 0 0 0 0-12Zm0 32H72a6 6 0 0 0 0 12h168a6 6 0 0 0 0-12Zm0 32H72a6 6 0 0 0 0 12h168a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgArticleMediumLight);
export default Memo;
