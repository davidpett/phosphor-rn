import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCenteredDotsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16l59.5.06 14.78 24.17a16 16 0 0 0 27.41.06L156.53 200H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM84 132a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm44 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm44 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgChatCenteredDotsFill);
export default Memo;
