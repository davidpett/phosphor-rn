import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperclipLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208.25 123.76a6 6 0 0 1 0 8.49l-82.06 82a54 54 0 0 1-76.36-76.39L149.1 37.14a38 38 0 1 1 53.77 53.72l-99.28 100.68a22 22 0 1 1-31.15-31.09l83.28-84.67a6 6 0 0 1 8.56 8.42L81 168.91a10 10 0 1 0 14.11 14.18L194.35 82.4a26 26 0 1 0-36.74-36.8L58.33 146.28a42 42 0 1 0 59.37 59.44l82.06-82a6 6 0 0 1 8.49.04Z" />
  </Svg>
);
const Memo = memo(SvgPaperclipLight);
export default Memo;
