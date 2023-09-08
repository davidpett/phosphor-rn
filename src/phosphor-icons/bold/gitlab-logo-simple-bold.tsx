import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGitlabLogoSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234 116.09 214.13 40a15.94 15.94 0 0 0-30.42-1.48L167 84H89L72.29 38.49A15.94 15.94 0 0 0 41.87 40L22 116.09a61.19 61.19 0 0 0 23.57 65.23l73.27 51.77a15.93 15.93 0 0 0 18.36 0l73.27-51.77A61.19 61.19 0 0 0 234 116.09Zm-37.4 45.63L128 210.19l-68.6-48.47a37.08 37.08 0 0 1-14.19-39.56l13.4-51.3 10.76 29.28A12 12 0 0 0 80.64 108h94.72a12 12 0 0 0 11.27-7.86l10.76-29.28 13.4 51.3a37.08 37.08 0 0 1-14.19 39.56Z" />
  </Svg>
);
const Memo = memo(SvgGitlabLogoSimpleBold);
export default Memo;
