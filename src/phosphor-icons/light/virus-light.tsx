import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVirusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M134 108a26 26 0 1 0-26 26 26 26 0 0 0 26-26Zm-26 14a14 14 0 1 1 14-14 14 14 0 0 1-14 14Zm82 6a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm-48 48a14 14 0 1 1-14-14 14 14 0 0 1 14 14Zm98-54h-18.2a93.57 93.57 0 0 0-23.26-56.06l13.7-13.7a6 6 0 0 0-8.48-8.48l-13.7 13.7A93.57 93.57 0 0 0 134 34.2V16a6 6 0 0 0-12 0v18.2a93.57 93.57 0 0 0-56.06 23.26l-13.7-13.7a6 6 0 0 0-8.48 8.48l13.7 13.7A93.57 93.57 0 0 0 34.2 122H16a6 6 0 0 0 0 12h18.2a93.57 93.57 0 0 0 23.26 56.06l-13.7 13.7a6 6 0 1 0 8.48 8.48l13.7-13.7A93.57 93.57 0 0 0 122 221.8V240a6 6 0 0 0 12 0v-18.2a93.57 93.57 0 0 0 56.06-23.26l13.7 13.7a6 6 0 0 0 8.48-8.48l-13.7-13.7A93.57 93.57 0 0 0 221.8 134H240a6 6 0 0 0 0-12Zm-112 88a82 82 0 1 1 82-82 82.1 82.1 0 0 1-82 82Z" />
  </Svg>
);
const Memo = memo(SvgVirusLight);
export default Memo;
