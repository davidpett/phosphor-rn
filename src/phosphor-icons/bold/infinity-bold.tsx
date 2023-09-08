import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfinityBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M252 128a60 60 0 0 1-102.43 42.43l-.49-.53-59.86-67.59a36 36 0 1 0 0 51.38l3.08-3.48a12 12 0 1 1 18 15.91l-3.35 3.78-.49.53a60 60 0 1 1 0-84.86l.49.53 59.86 67.59a36 36 0 1 0 0-51.38l-3.08 3.48a12 12 0 1 1-18-15.91l3.35-3.78.49-.53A60 60 0 0 1 252 128Z" />
  </Svg>
);
const Memo = memo(SvgInfinityBold);
export default Memo;
