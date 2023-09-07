import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166.81 137.16a4 4 0 0 1 1.24-6.5l44.76-19.46a12 12 0 0 0-1.05-22.33L51.67 36.6A12 12 0 0 0 36.6 51.67l52.27 160.09a11.86 11.86 0 0 0 10.8 8.24h.58a11.86 11.86 0 0 0 11-7.19l19.46-44.76a3.92 3.92 0 0 1 2.92-2.34 4 4 0 0 1 3.58 1.1l49.67 49.68a12 12 0 0 0 17 0l12.69-12.69a12 12 0 0 0 0-17Zm44 61-12.69 12.69a4 4 0 0 1-5.66 0l-49.67-49.67a12 12 0 0 0-8.48-3.52 12.21 12.21 0 0 0-2.24.21 12 12 0 0 0-8.77 7l-19.46 44.76a4 4 0 0 1-7.39-.35L44.2 49.19a4 4 0 0 1 5-5l160.07 52.28a4 4 0 0 1 .35 7.39l-44.76 19.46a12 12 0 0 0-3.7 19.49l49.67 49.67a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgCursorThin);
export default Memo;
