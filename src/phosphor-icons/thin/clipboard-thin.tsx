import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClipboardThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 36h-38.08a44 44 0 0 0-67.84 0H56a12 12 0 0 0-12 12v168a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm-72-8a36 36 0 0 1 36 36v4H92v-4a36 36 0 0 1 36-36Zm76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h32.83A43.71 43.71 0 0 0 84 64v8a4 4 0 0 0 4 4h80a4 4 0 0 0 4-4v-8a43.71 43.71 0 0 0-4.83-20H200a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgClipboardThin);
export default Memo;
