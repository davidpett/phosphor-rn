import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitlabLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234 116.09 214.13 40a15.94 15.94 0 0 0-30.42-1.48L167 84H89L72.29 38.49A15.94 15.94 0 0 0 41.87 40L22 116.09a61.19 61.19 0 0 0 23.57 65.23l73.27 51.77a15.93 15.93 0 0 0 18.36 0l73.27-51.77A61.19 61.19 0 0 0 234 116.09ZM58.61 70.86l10.76 29.28A12 12 0 0 0 80.64 108h94.72a12 12 0 0 0 11.27-7.86l10.76-29.28 9.14 35L128 161.31l-78.53-55.48ZM44 131.37 107.2 176l-13.79 9.74-34-24A36.86 36.86 0 0 1 44 131.37Zm84 78.82-13.79-9.75L128 190.7l13.79 9.74Zm68.6-48.47-34 24-13.8-9.72 63.2-44.63a36.86 36.86 0 0 1-15.4 30.35Z" />
  </Svg>
);
const Memo = memo(SvgGitlabLogoBold);
export default Memo;
