import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHTwoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150 56v120a6 6 0 0 1-12 0v-54H46v54a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0v54h92V56a6 6 0 0 1 12 0Zm90 146h-36l36-47.95A30 30 0 1 0 187.71 126a6 6 0 1 0 11.29 4 18 18 0 0 1 14.47-11.82 18 18 0 0 1 16.87 28.66L187.2 204.4a6 6 0 0 0 4.8 9.6h48a6 6 0 0 0 0-12Z" />
  </Svg>
);
const Memo = memo(SvgTextHTwoLight);
export default Memo;
