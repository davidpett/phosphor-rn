import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleAngular = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192h-40.57a16 16 0 0 1-13-6.7L83.88 80H32a8 8 0 0 1 0-16h51.88a16 16 0 0 1 13 6.7L172.12 176h40.57l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l18-25.12h40.57l-10.39 10.32a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64h-40.57a16 16 0 0 0-13 6.7l-17.97 25.12A8 8 0 0 0 143 107Zm-30 42a8 8 0 0 0-11.16 1.86L83.88 176H32a8 8 0 0 0 0 16h51.88a16 16 0 0 0 13-6.7l17.95-25.12A8 8 0 0 0 113 149Z" />
  </Svg>
);
const Memo = memo(SvgShuffleAngular);
export default Memo;
