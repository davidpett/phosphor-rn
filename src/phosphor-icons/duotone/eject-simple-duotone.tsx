import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEjectSimpleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M215.92 160H40.08a8.1 8.1 0 0 1-6.26-13.2L115.48 46a16.1 16.1 0 0 1 25 0l81.7 100.8a8.1 8.1 0 0 1-6.26 13.2Z"
      opacity={0.2}
    />
    <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 1 1 0-16h192a8 8 0 0 1 8 8ZM25.59 158.84a16 16 0 0 1 2-17.07l81.67-100.83a24.11 24.11 0 0 1 37.48 0l81.65 100.83A16.1 16.1 0 0 1 215.91 168H40.09a16 16 0 0 1-14.5-9.16ZM40 151.91s0 .09.08.11h175.83s.08-.09.08-.13L134.3 51a8.1 8.1 0 0 0-12.6 0L40 151.84a.28.28 0 0 0 0 .07Z" />
  </Svg>
);
const Memo = memo(SvgEjectSimpleDuotone);
export default Memo;
