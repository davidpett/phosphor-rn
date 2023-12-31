import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutCardinalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m128 24 32 32H96Zm0 208 32-32H96Zm72-136v64l32-32ZM24 128l32 32V96Z"
      opacity={0.2}
    />
    <Path d="M96 64h24v32a8 8 0 0 0 16 0V64h24a8 8 0 0 0 5.66-13.66l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 96 64Zm32-28.69L140.69 48h-25.38ZM160 192h-24v-32a8 8 0 0 0-16 0v32H96a8 8 0 0 0-5.66 13.66l32 32a8 8 0 0 0 11.32 0l32-32A8 8 0 0 0 160 192Zm-32 28.69L115.31 208h25.38Zm109.66-98.35-32-32A8 8 0 0 0 192 96v24h-32a8 8 0 0 0 0 16h32v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32ZM208 140.69v-25.38L220.69 128ZM96 136a8 8 0 0 0 0-16H64V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 64 160v-24Zm-48 4.69L35.31 128 48 115.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutCardinalDuotone);
export default Memo;
