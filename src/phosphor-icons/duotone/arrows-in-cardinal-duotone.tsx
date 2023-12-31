import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInCardinalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 96 96 64h64Zm-32 96h64l-32-32Zm64-64 32 32V96ZM64 96v64l32-32Z"
      opacity={0.2}
    />
    <Path d="M122.34 101.66a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 56h-24V24a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66ZM140.69 72 128 84.69 115.31 72Zm-7 82.34a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 200h24v32a8 8 0 0 0 16 0v-32h24a8 8 0 0 0 5.66-13.66ZM115.31 184 128 171.31 140.69 184ZM232 120h-32V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h32a8 8 0 0 0 0-16Zm-48 20.69L171.31 128 184 115.31Zm-82.34-18.35-32-32A8 8 0 0 0 56 96v24H24a8 8 0 0 0 0 16h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32ZM72 140.69v-25.38L84.69 128Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInCardinalDuotone);
export default Memo;
