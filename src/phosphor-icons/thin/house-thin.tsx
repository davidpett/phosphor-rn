import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.13 106.72-80.06-75.59a12 12 0 0 0-16.2.05l-79.94 75.49a12 12 0 0 0-3.93 8.87V208a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-92.46a12 12 0 0 0-3.87-8.82ZM212 208a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-48a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v48a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-92.46a4.09 4.09 0 0 1 1.36-3l79.94-75.49a4 4 0 0 1 5.33 0l80.06 75.58a4 4 0 0 1 1.31 3Z" />
  </Svg>
);
const Memo = memo(SvgHouseThin);
export default Memo;
