import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M44 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0Zm24 64V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12Zm8 0a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4V64a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4Zm152 48v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12Zm-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgAlignLeftThin);
export default Memo;
