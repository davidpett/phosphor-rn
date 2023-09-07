import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderLockFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 72h-84.69L104 44.69A15.86 15.86 0 0 0 92.69 40H40a16 16 0 0 0-16 16v144.62A15.4 15.4 0 0 0 39.38 216h73.18a8 8 0 0 0 0-16H40V88h176v16a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16ZM40 72V56h52.69l16 16Zm184 88h-8v-4a28 28 0 0 0-56 0v4h-8a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h72a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Zm-24 0h-24v-4a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgFolderLockFill);
export default Memo;
