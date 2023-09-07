import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 216a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6ZM64 158a6 6 0 0 0 6-6V70.49l101.76 101.75a6 6 0 0 0 8.48-8.48L78.49 62H160a6 6 0 0 0 0-12H64a6 6 0 0 0-6 6v96a6 6 0 0 0 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLeftLight);
export default Memo;
