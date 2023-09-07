import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUploadBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 184a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm36-68h-44a12 12 0 0 0 0 24h40v56H36v-56h40a12 12 0 0 0 0-24H32a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h192a20 20 0 0 0 20-20v-64a20 20 0 0 0-20-20ZM88.49 80.49 116 53v75a12 12 0 0 0 24 0V53l27.51 27.52a12 12 0 1 0 17-17l-48-48a12 12 0 0 0-17 0l-48 48a12 12 0 1 0 17 17Z" />
  </Svg>
);
const Memo = memo(SvgUploadBold);
export default Memo;
