import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignTopSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 32a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6Zm-32 40v152a14 14 0 0 1-14 14H96a14 14 0 0 1-14-14V72a14 14 0 0 1 14-14h64a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H96a2 2 0 0 0-2 2v152a2 2 0 0 0 2 2h64a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgAlignTopSimpleLight);
export default Memo;
