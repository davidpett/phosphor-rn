import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyReturnBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.51 144.49a12 12 0 0 1 0-17l24-24a12 12 0 0 1 17 17L109 124h55v-20a12 12 0 0 1 24 0v32a12 12 0 0 1-12 12h-67l3.52 3.51a12 12 0 0 1-17 17ZM236 56v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20Zm-24 4H44v136h168Z" />
  </Svg>
);
const Memo = memo(SvgKeyReturnBold);
export default Memo;
