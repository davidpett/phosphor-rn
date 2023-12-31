import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareUpRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14Zm2 174a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM166 96v48a6 6 0 0 1-12 0v-33.52l-53.76 53.76a6 6 0 0 1-8.48-8.48L145.52 102H112a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareUpRightLight);
export default Memo;
