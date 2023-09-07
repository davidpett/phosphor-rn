import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellSimpleZBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 140a12 12 0 0 1-12 12h-32a12 12 0 0 1-10-18.66L121.58 104H112a12 12 0 1 1 0-24h32a12 12 0 0 1 10 18.66L134.42 128H144a12 12 0 0 1 12 12Zm69.33 46A19.77 19.77 0 0 1 208 196H48a19.77 19.77 0 0 1-17.31-10 20.08 20.08 0 0 1 .05-20.06C39.39 151 44 129.58 44 104a84 84 0 0 1 168 0c0 25.57 4.59 47 13.27 61.93a20.08 20.08 0 0 1 .07 20.07Zm-24-14c-8.84-18-13.33-40.87-13.33-68a60 60 0 0 0-120 0c0 27.14-4.48 50-13.33 68ZM160 212H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgBellSimpleZBold);
export default Memo;
