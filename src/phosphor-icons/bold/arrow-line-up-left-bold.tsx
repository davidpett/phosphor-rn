import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM64 164a12 12 0 0 0 12-12V85l91.51 91.52a12 12 0 0 0 17-17L93 68h67a12 12 0 0 0 0-24H64a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLeftBold);
export default Memo;