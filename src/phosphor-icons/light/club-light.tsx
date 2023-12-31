import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClubLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 90q-2.59 0-5.16.24a54 54 0 1 0-101.69 0c-1.7-.16-3.42-.24-5.15-.24a54 54 0 1 0 27.85 100.28l-9.6 32A6 6 0 0 0 96 230h64a6 6 0 0 0 5.75-7.72l-9.6-32A54 54 0 1 0 184 90Zm0 96a41.92 41.92 0 0 1-35.06-18.87 6 6 0 0 0-10.76 5L151.94 218h-47.88l13.76-45.84a6 6 0 0 0-10.76-5 42 42 0 1 1-20.91-62.69 6 6 0 0 0 7-9 42 42 0 1 1 69.72 0 6 6 0 0 0 7 9A42 42 0 1 1 184 186Z" />
  </Svg>
);
const Memo = memo(SvgClubLight);
export default Memo;
