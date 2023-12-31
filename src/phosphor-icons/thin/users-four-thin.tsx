import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersFourThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M29.6 123.2a4 4 0 0 0 5.6-.8 56 56 0 0 1 89.6 0 3.93 3.93 0 0 0 6.38 0 56 56 0 0 1 89.6 0 4 4 0 1 0 6.4-4.8 63.55 63.55 0 0 0-32.5-22.85 36 36 0 1 0-37.4 0 63.39 63.39 0 0 0-29.3 19 63.34 63.34 0 0 0-29.3-19 36 36 0 1 0-37.4 0A63.61 63.61 0 0 0 28.8 117.6a4 4 0 0 0 .8 5.6ZM148 64a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm-96 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm142.7 134.75a36 36 0 1 0-37.4 0A63.39 63.39 0 0 0 128 217.7a63.34 63.34 0 0 0-29.3-18.95 36 36 0 1 0-37.4 0 63.61 63.61 0 0 0-32.5 22.85 4 4 0 0 0 6.4 4.8 56 56 0 0 1 89.6 0 3.93 3.93 0 0 0 6.38 0 56 56 0 0 1 89.6 0 4 4 0 0 0 6.4-4.8 63.55 63.55 0 0 0-32.48-22.85ZM52 168a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm96 0a28 28 0 1 1 28 28 28 28 0 0 1-28-28Z" />
  </Svg>
);
const Memo = memo(SvgUsersFourThin);
export default Memo;
