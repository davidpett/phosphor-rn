import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBriefcaseMetalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 112h200a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4Zm-4 88a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16v-20a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4ZM232 72v20a4 4 0 0 1-4 4H28a4 4 0 0 1-4-4V72a16 16 0 0 1 16-16h40v-8a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v8h40a16 16 0 0 1 16 16Zm-72-24a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v8h64Z" />
  </Svg>
);
const Memo = memo(SvgBriefcaseMetalFill);
export default Memo;
