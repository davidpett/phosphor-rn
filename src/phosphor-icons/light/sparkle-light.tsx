import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSparkleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m196.89 130.94-51.65-19a2 2 0 0 1-1.15-1.14l-19-51.66a13.92 13.92 0 0 0-26.12 0l-19 51.65a2 2 0 0 1-1.14 1.15l-51.66 19a13.92 13.92 0 0 0 0 26.12l51.65 19a2 2 0 0 1 1.15 1.14l19 51.66a13.92 13.92 0 0 0 26.12 0l19-51.65a2 2 0 0 1 1.14-1.15l51.66-19a13.92 13.92 0 0 0 0-26.12Zm-4.15 14.86-51.66 19a13.94 13.94 0 0 0-8.25 8.26l-19 51.65a1.92 1.92 0 0 1-3.6 0l-19-51.66a14 14 0 0 0-8.25-8.25l-51.65-19a1.92 1.92 0 0 1 0-3.6l51.66-19a13.94 13.94 0 0 0 8.25-8.26l19-51.65a1.92 1.92 0 0 1 3.6 0l19 51.66a13.94 13.94 0 0 0 8.26 8.25l51.65 19a1.92 1.92 0 0 1 0 3.6ZM146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6Zm100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgSparkleLight);
export default Memo;
