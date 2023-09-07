import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMusicNotesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M210.46 28.85a4 4 0 0 0-3.43-.73l-128 32A4 4 0 0 0 76 64v118.87A32 32 0 1 0 84 204v-88.88l120-30v65.75a32 32 0 1 0 8 21.13V32a4 4 0 0 0-1.54-3.15ZM52 228a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm128-32a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm-96-89.12V67.12l120-30v39.76Z" />
  </Svg>
);
const Memo = memo(SvgMusicNotesThin);
export default Memo;
