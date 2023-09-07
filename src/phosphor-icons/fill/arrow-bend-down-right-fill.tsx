import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 157.66-48 48A8 8 0 0 1 168 200v-40h-40A104.11 104.11 0 0 1 24 56a8 8 0 0 1 16 0 88.1 88.1 0 0 0 88 88h40v-40a8 8 0 0 1 13.66-5.66l48 48a8 8 0 0 1 0 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownRightFill);
export default Memo;
