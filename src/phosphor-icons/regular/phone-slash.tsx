import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.93 34.62a8 8 0 1 0-11.84 10.76l27.59 30.36a141.26 141.26 0 0 0-45.27 30.44c-20 20-21.92 49.46-4.69 71.67a16 16 0 0 0 18.38 5.07l49-17.37.29-.11a16 16 0 0 0 9.75-11.72l5.9-29.51a75.89 75.89 0 0 1 8.56-2.4l90.51 99.57a8 8 0 1 0 11.84-10.76Zm43.7 74.52a16 16 0 0 0-10.32 11.94l-5.9 29.5-48.78 17.3c-.1 0-.17.13-.27.17-12.33-15.9-11-36.22 3.36-50.56a125.79 125.79 0 0 1 45.47-29.1l18.3 20.14c-.62.2-1.24.39-1.86.61Zm138.65 68.71a16 16 0 0 1-18.38 5.07l-9.25-3.28a8 8 0 0 1 5.35-15.08l9.37 3.32.3.12c12.3-15.85 11-36.17-3.39-50.51-25.66-25.66-61.88-39.27-99.35-37.31a8 8 0 1 1-.83-16c42-2.19 82.63 13.1 111.49 42 19.99 19.99 21.92 49.46 4.69 71.67Z" />
  </Svg>
);
const Memo = memo(SvgPhoneSlash);
export default Memo;
