import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserRectangleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM66 204a68 68 0 0 1 124 0Zm154-4a4 4 0 0 1-4 4h-17.33a76.17 76.17 0 0 0-50.06-45.14 44 44 0 1 0-41.22 0A76.17 76.17 0 0 0 57.33 204H40a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4Zm-92-44a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgUserRectangleThin);
export default Memo;
