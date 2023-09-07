import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinkSimpleBreak = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80a55.67 55.67 0 0 1-16.4 39.6l-30.07 30.06a8 8 0 0 1-11.31-11.32l30.07-30.06a40 40 0 1 0-56.57-56.56l-30.06 30.05a8 8 0 0 1-11.32-11.32L136.4 40.4A56 56 0 0 1 232 80Zm-93.66 94.22-30.06 30.06a40 40 0 1 1-56.56-56.57l30.05-30.05a8 8 0 0 0-11.32-11.32L40.4 136.4a56 56 0 0 0 79.2 79.2l30.06-30.07a8 8 0 0 0-11.32-11.31Z" />
  </Svg>
);
const Memo = memo(SvgLinkSimpleBreak);
export default Memo;
