import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSparkleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m199 125.31-49.89-18.38L130.69 57a19.92 19.92 0 0 0-37.38 0l-18.38 49.93L25 125.31a19.92 19.92 0 0 0 0 37.38l49.89 18.38L93.31 231a19.92 19.92 0 0 0 37.38 0l18.38-49.89L199 162.69a19.92 19.92 0 0 0 0-37.38Zm-60 33.9a19.89 19.89 0 0 0-11.8 11.8L112 212.28 96.79 171A19.89 19.89 0 0 0 85 159.21L43.72 144 85 128.79A19.89 19.89 0 0 0 96.79 117L112 75.72 127.21 117a19.89 19.89 0 0 0 11.8 11.8l41.27 15.2ZM140 40a12 12 0 0 1 12-12h12V16a12 12 0 0 1 24 0v12h12a12 12 0 0 1 0 24h-12v12a12 12 0 0 1-24 0V52h-12a12 12 0 0 1-12-12Zm112 48a12 12 0 0 1-12 12h-4v4a12 12 0 0 1-24 0v-4h-4a12 12 0 0 1 0-24h4v-4a12 12 0 0 1 24 0v4h4a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgSparkleBold);
export default Memo;
