import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleUserFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M231.73 221.94A8 8 0 0 1 224 232h-64a8 8 0 0 1-7.73-10 40 40 0 0 1 17.11-23.33 32 32 0 1 1 45.24 0 40 40 0 0 1 17.11 23.27ZM216 72h-85.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H40a16 16 0 0 0-16 16v136a16 16 0 0 0 16 16h80a8 8 0 0 0 0-16H40V64h53.33l27.74 20.8a16.12 16.12 0 0 0 9.6 3.2H216v32a8 8 0 0 0 16 0V88a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleUserFill);
export default Memo;
