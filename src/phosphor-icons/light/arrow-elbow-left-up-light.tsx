import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftUpLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 192a6 6 0 0 1-6 6H80a6 6 0 0 1-6-6V62.49l-37.76 37.75a6 6 0 0 1-8.48-8.48l48-48a6 6 0 0 1 8.48 0l48 48a6 6 0 1 1-8.48 8.48L86 62.49V186h138a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftUpLight);
export default Memo;
