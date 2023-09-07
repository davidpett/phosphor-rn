import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotchesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.83 130.83-80 80a4 4 0 1 1-5.66-5.66l80-80a4 4 0 1 1 5.66 5.66Zm-16-93.66a4 4 0 0 0-5.66 0l-152 152a4 4 0 0 0 5.66 5.66l152-152a4 4 0 0 0 0-5.66Z" />
  </Svg>
);
const Memo = memo(SvgNotchesThin);
export default Memo;
