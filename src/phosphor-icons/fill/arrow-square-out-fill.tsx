import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareOutFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 136v72a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h72a8 8 0 0 1 0 16H48v128h128v-72a8 8 0 0 1 16 0Zm32-96a8 8 0 0 0-8-8h-64a8 8 0 0 0-5.66 13.66L172.69 72l-42.35 42.34a8 8 0 0 0 11.32 11.32L184 83.31l26.34 26.35A8 8 0 0 0 224 104Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareOutFill);
export default Memo;
