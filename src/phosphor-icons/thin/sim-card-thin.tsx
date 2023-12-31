import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSimCardThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.83 85.17-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83ZM204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h94.35L204 89.66ZM76 120v72a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4Zm8 4h88v64h-24v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H84Z" />
  </Svg>
);
const Memo = memo(SvgSimCardThin);
export default Memo;
