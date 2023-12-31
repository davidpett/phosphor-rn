import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCallBellLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 182h208a6 6 0 0 0 0-12h-10v-18a94.1 94.1 0 0 0-88-93.8V38h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v20.2A94.1 94.1 0 0 0 34 152v18H24a6 6 0 0 0 0 12Zm22-30a82 82 0 0 1 164 0v18H46Zm192 56a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h208a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgCallBellLight);
export default Memo;
