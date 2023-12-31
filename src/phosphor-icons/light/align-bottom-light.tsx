import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignBottomLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6Zm-84-40V80a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14v96a14 14 0 0 1-14 14h-40a14 14 0 0 1-14-14Zm12 0a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V80a2 2 0 0 0-2-2h-40a2 2 0 0 0-2 2Zm-100 0V40a14 14 0 0 1 14-14h40a14 14 0 0 1 14 14v136a14 14 0 0 1-14 14H64a14 14 0 0 1-14-14Zm12 0a2 2 0 0 0 2 2h40a2 2 0 0 0 2-2V40a2 2 0 0 0-2-2H64a2 2 0 0 0-2 2Z" />
  </Svg>
);
const Memo = memo(SvgAlignBottomLight);
export default Memo;
