import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCassetteTape = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM80 192l12-16h72l12 16Zm144 0h-28l-19.2-25.6A16.07 16.07 0 0 0 164 160H92a16.07 16.07 0 0 0-12.8 6.4L60 192H32V64h192v128ZM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64Zm-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm112 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgCassetteTape);
export default Memo;
