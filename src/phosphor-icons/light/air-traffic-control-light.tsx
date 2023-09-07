import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirTrafficControlLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.47 64A14 14 0 0 0 216 58h-82V22h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v36H40a14 14 0 0 0-13.16 18.78l26.19 72A14 14 0 0 0 66.18 158H98v66a6 6 0 0 0 12 0v-66h36v66a6 6 0 0 0 12 0v-66h31.82a14 14 0 0 0 13.18-9.22l26.19-72A14 14 0 0 0 227.47 64ZM109 146 95.19 70h65.62L147 146Zm-44.7-1.32-26.18-72a2 2 0 0 1 .24-1.83A1.94 1.94 0 0 1 40 70h43l13.82 76H66.18a2 2 0 0 1-1.88-1.32Zm153.58-72-26.18 72a2 2 0 0 1-1.88 1.32h-30.63L173 70h43a1.94 1.94 0 0 1 1.64.85 2 2 0 0 1 .24 1.83Z" />
  </Svg>
);
const Memo = memo(SvgAirTrafficControlLight);
export default Memo;
