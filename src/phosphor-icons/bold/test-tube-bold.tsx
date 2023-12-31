import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTestTubeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m240.49 83.51-60-60a12 12 0 0 0-17 0L34.28 152.75a48.77 48.77 0 0 0 69 69l111.2-111.26 21.31-7.11a12 12 0 0 0 4.7-19.87ZM86.28 204.75a24.77 24.77 0 0 1-35-35l28.13-28.13c7.73-2.41 19.58-3 35.06 5a83.94 83.94 0 0 0 21.95 8ZM204.2 88.62a12.15 12.15 0 0 0-4.69 2.89l-38.89 38.9c-7.73 2.41-19.58 3-35.06-5a83.94 83.94 0 0 0-21.94-8L172 49l37.79 37.79Z" />
  </Svg>
);
const Memo = memo(SvgTestTubeBold);
export default Memo;
