import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsSplit = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 189.66-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L184 196.69v-57.38l-56-56-56 56v57.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L56 196.69V136a8 8 0 0 1 2.34-5.66L120 68.69V24a8 8 0 0 1 16 0v44.69l61.66 61.65A8 8 0 0 1 200 136v60.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowsSplit);
export default Memo;
