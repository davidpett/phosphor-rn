import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatLinesRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 80v96a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0Zm24-8a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8Zm165.66 50.34-96-96A8 8 0 0 0 128 32v40h-24a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h24v40a8 8 0 0 0 13.66 5.66l96-96a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatLinesRightFill);
export default Memo;
