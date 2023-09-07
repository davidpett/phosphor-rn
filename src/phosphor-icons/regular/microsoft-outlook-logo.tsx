import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMicrosoftOutlookLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M88 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm128-40h-8V48a16 16 0 0 0-16-16h-80a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32v16a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-88a16 16 0 0 0-16-16ZM112 48h80v77.24l-40 28.89V80a16 16 0 0 0-16-16h-24ZM40 176V80h96v96H40Zm48 32v-16h48a16 16 0 0 0 16-16v-2.13L199.26 208Zm128-7.65L165.66 164 216 127.65Z" />
  </Svg>
);
const Memo = memo(SvgMicrosoftOutlookLogo);
export default Memo;
