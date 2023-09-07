import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 56v144a4 4 0 0 1-8 0v-68H60v68a4 4 0 0 1-8 0V56a4 4 0 0 1 8 0v68h136V56a4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgTextHThin);
export default Memo;
