import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-79.43 157.66-5.46 5.45a44 44 0 0 1-62.22-62.22l24-24a44.08 44.08 0 0 1 55.56-5.48 8 8 0 0 1-8.9 13.3 28 28 0 0 0-35.35 3.49l-24 24a28 28 0 0 0 39.6 39.6l5.45-5.46a8 8 0 0 1 11.32 11.32Zm66.54-66.55-24 24a44.08 44.08 0 0 1-55.56 5.48 8 8 0 0 1 8.9-13.3 28.06 28.06 0 0 0 35.35-3.49l24-24a28 28 0 0 0-39.6-39.6l-5.45 5.46a8 8 0 0 1-11.32-11.32l5.46-5.45a44 44 0 0 1 62.22 62.22Z" />
  </Svg>
);
const Memo = memo(SvgLinkFill);
export default Memo;
