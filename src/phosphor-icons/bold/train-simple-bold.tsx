import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrainSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 20H72a36 36 0 0 0-36 36v128a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V56a36 36 0 0 0-36-36ZM72 44h112a12 12 0 0 1 12 12v60H60V56a12 12 0 0 1 12-12Zm112 152H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12Zm-80-28a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm80 0a16 16 0 1 1-16-16 16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgTrainSimpleBold);
export default Memo;
