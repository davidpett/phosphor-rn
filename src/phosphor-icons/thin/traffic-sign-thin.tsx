import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrafficSignThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.32 119.12 136.88 15.68a12.55 12.55 0 0 0-17.76 0L15.68 119.12a12.55 12.55 0 0 0 0 17.76l103.44 103.44a12.55 12.55 0 0 0 17.76 0l103.44-103.44a12.55 12.55 0 0 0 0-17.76Zm-5.66 12.1L131.22 234.67a4.56 4.56 0 0 1-6.44 0L21.33 131.22a4.55 4.55 0 0 1 0-6.44L124.78 21.33a4.56 4.56 0 0 1 6.44 0l103.45 103.45a4.55 4.55 0 0 1 0 6.44Zm-63.83-14a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L158.34 124H112a20 20 0 0 0-20 20v8a4 4 0 0 1-8 0v-8a28 28 0 0 1 28-28h46.34l-17.17-17.17a4 4 0 0 1 5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgTrafficSignThin);
export default Memo;
