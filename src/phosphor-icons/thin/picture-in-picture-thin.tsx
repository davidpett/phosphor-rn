import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPictureInPictureThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 52H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12ZM36 192V64a4 4 0 0 1 4-4h176a4 4 0 0 1 4 4v60h-76a12 12 0 0 0-12 12v60H40a4 4 0 0 1-4-4Zm180 4h-76v-60a4 4 0 0 1 4-4h76v60a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgPictureInPictureThin);
export default Memo;
