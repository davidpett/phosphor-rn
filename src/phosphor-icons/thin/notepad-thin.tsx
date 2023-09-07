import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotepadThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 128a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm52-108v152a28 28 0 0 1-28 28H72a28 28 0 0 1-28-28V48a12 12 0 0 1 12-12h20V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h40V24a4 4 0 0 1 8 0v12h20a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4h-20v12a4 4 0 0 1-8 0V44h-40v12a4 4 0 0 1-8 0V44H84v12a4 4 0 0 1-8 0V44H56a4 4 0 0 0-4 4v152a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20Z" />
  </Svg>
);
const Memo = memo(SvgNotepadThin);
export default Memo;
