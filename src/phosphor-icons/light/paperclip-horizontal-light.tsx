import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperclipHorizontalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 128a54.06 54.06 0 0 1-54 54H48a38 38 0 0 1 0-76h144a22 22 0 0 1 0 44H80a6 6 0 0 1 0-12h112a10 10 0 0 0 0-20H48a26 26 0 0 0 0 52h144a42 42 0 0 0 0-84H80a6 6 0 0 1 0-12h112a54.06 54.06 0 0 1 54 54Z" />
  </Svg>
);
const Memo = memo(SvgPaperclipHorizontalLight);
export default Memo;
