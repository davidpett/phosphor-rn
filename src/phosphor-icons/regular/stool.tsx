import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStool = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16h6.64L56.1 222.75a8 8 0 0 0 6.65 9.15 7.82 7.82 0 0 0 1.25.1 8 8 0 0 0 7.89-6.75L79.68 176h96.64l7.78 49.25A8 8 0 0 0 192 232a7.82 7.82 0 0 0 1.26-.1 8 8 0 0 0 6.65-9.15L177.36 80H184a16 16 0 0 0 16-16ZM72 40h112v24H72Zm101.79 120H82.21l12.63-80h66.32Z" />
  </Svg>
);
const Memo = memo(SvgStool);
export default Memo;
