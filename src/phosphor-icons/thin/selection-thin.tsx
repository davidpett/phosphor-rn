import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148 40a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Zm-4 172h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8Zm64-176h-24a4 4 0 0 0 0 8h24a4 4 0 0 1 4 4v24a4 4 0 0 0 8 0V48a12 12 0 0 0-12-12Zm8 72a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4Zm0 72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4h-24a4 4 0 0 0 0 8h24a12 12 0 0 0 12-12v-24a4 4 0 0 0-4-4ZM40 148a4 4 0 0 0 4-4v-32a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4Zm32 64H48a4 4 0 0 1-4-4v-24a4 4 0 0 0-8 0v24a12 12 0 0 0 12 12h24a4 4 0 0 0 0-8Zm0-176H48a12 12 0 0 0-12 12v24a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h24a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgSelectionThin);
export default Memo;
