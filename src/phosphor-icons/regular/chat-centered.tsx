import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCentered = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h59.47l14.81 24.23a16 16 0 0 0 27.41.06L156.53 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 144h-59.47a16.07 16.07 0 0 0-13.69 7.71L128 216l-14.85-24.3a16.08 16.08 0 0 0-13.68-7.7H40V56h176Z" />
  </Svg>
);
const Memo = memo(SvgChatCentered);
export default Memo;
