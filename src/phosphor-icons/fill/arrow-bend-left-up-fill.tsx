import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendLeftUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 224a8 8 0 0 1-8 8A104.11 104.11 0 0 1 96 128V88H56a8 8 0 0 1-5.66-13.66l48-48a8 8 0 0 1 11.32 0l48 48A8 8 0 0 1 152 88h-40v40a88.1 88.1 0 0 0 88 88 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendLeftUpFill);
export default Memo;
