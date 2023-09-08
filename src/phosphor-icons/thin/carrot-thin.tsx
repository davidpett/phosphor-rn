import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarrotThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 68h-38.34l33.17-33.17a4 4 0 1 0-5.66-5.66L188 62.34V24a4 4 0 0 0-8 0v40a60 60 0 0 0-78.39 5.54c-17.12 16.79-34.51 45.72-51.7 86-11.93 28-19.61 52-20.59 55.09A12.05 12.05 0 0 0 40 228a12 12 0 0 0 5.36-1.28c3.12-1 27.13-8.65 55.09-20.59 40.29-17.2 69.24-34.61 86-51.71A60 60 0 0 0 192 76h40a4 4 0 0 0 0-8Zm-51.26 80.79c-9.76 10-23.42 19.39-38.37 27.91l-27.54-27.53a4 4 0 0 0-5.65 5.65l25.9 25.91C92.61 203.55 43.34 219 42.64 219.18a4.45 4.45 0 0 0-.71.3 4 4 0 0 1-5.41-5.41 4.45 4.45 0 0 0 .3-.71c.29-1 29.72-95 67.62-135.27l36.74 36.73a4 4 0 0 0 5.65 0 4 4 0 0 0 0-5.65l-36.65-36.65a52 52 0 0 1 70.56 76.27Z" />
  </Svg>
);
const Memo = memo(SvgCarrotThin);
export default Memo;
