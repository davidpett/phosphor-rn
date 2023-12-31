import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignInBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m144.49 136.49-40 40a12 12 0 0 1-17-17L107 140H24a12 12 0 0 1 0-24h83L87.51 96.49a12 12 0 0 1 17-17l40 40a12 12 0 0 1-.02 17ZM192 28h-56a12 12 0 0 0 0 24h52v152h-52a12 12 0 0 0 0 24h56a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Z" />
  </Svg>
);
const Memo = memo(SvgSignInBold);
export default Memo;
