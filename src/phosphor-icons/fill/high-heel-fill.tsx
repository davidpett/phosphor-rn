import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighHeelFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M88 172.18V200a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-44a4 4 0 0 1 4-4h4a95.27 95.27 0 0 1 54.26 16.88 3.93 3.93 0 0 1 1.74 3.3Zm143-8-51-11.48L69.66 42.34a8 8 0 0 0-8.45-1.85A8.37 8.37 0 0 0 58 42.73C36.06 66.75 24 97 24 128v4a4 4 0 0 0 4 4h4a111.06 111.06 0 0 1 56 15.06c2.48 1.45 4.91 3 7.3 4.62a112.45 112.45 0 0 1 40.55 50.39 15.9 15.9 0 0 0 14.87 9.93H240a16 16 0 0 0 16-16v-4.73a31.72 31.72 0 0 0-25-31.08Z" />
  </Svg>
);
const Memo = memo(SvgHighHeelFill);
export default Memo;
