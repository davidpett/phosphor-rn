import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtitlesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM56 128h16a8 8 0 0 1 0 16H56a8 8 0 0 1 0-16Zm96 48H56a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32h-96a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgSubtitlesFill);
export default Memo;
