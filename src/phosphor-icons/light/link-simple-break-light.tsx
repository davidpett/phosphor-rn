import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleBreakLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m214.2 118.18-30.07 30.07a6 6 0 0 1-8.49-8.49l30.08-30.07a42 42 0 0 0-59.41-59.41l-30.07 30.06a6 6 0 0 1-8.49-8.49l30.07-30a54 54 0 0 1 76.38 76.38Zm-74.44 57.46-30.07 30.08a42 42 0 0 1-59.41-59.41l30.06-30.07a6 6 0 0 0-8.49-8.49l-30 30.07a54 54 0 0 0 76.38 76.39l30.07-30.08a6 6 0 0 0-8.49-8.49Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleBreakLight);
export default Memo;
