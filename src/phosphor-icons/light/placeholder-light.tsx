import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlaceholderLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm2 14v153.52L54.49 46H208a2 2 0 0 1 2 2ZM46 208V54.48L201.51 210H48a2 2 0 0 1-2-2Z" />
  </Svg>
);
const Memo = memo(SvgPlaceholderLight);
export default Memo;
