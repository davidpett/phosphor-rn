import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMessengerLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M181.66 106.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0L112 123.31l-26.34 26.35a8 8 0 0 1-11.32-11.32l32-32a8 8 0 0 1 11.32 0L144 132.69l26.34-26.35a8 8 0 0 1 11.32 0ZM232 128a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128Zm-16 0a88 88 0 1 0-164.19 44.06 8 8 0 0 1 .66 6.54L40 216l37.4-12.48a8 8 0 0 1 6.54.67A88 88 0 0 0 216 128Z" />
  </Svg>
);
const Memo = memo(SvgMessengerLogo);
export default Memo;
