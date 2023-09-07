import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWallFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 92h92a4 4 0 0 0 4-4V56a8 8 0 0 0-8-8h-84a4 4 0 0 0-4 4ZM184 152h44a4 4 0 0 0 4-4v-36a4 4 0 0 0-4-4h-44ZM88 108h80v44H88zM72 108H28a4 4 0 0 0-4 4v36a4 4 0 0 0 4 4h44ZM136 168v36a4 4 0 0 0 4 4h84a8 8 0 0 0 8-8v-28a4 4 0 0 0-4-4ZM120 92V52a4 4 0 0 0-4-4H32a8 8 0 0 0-8 8v32a4 4 0 0 0 4 4ZM120 168H28a4 4 0 0 0-4 4v28a8 8 0 0 0 8 8h84a4 4 0 0 0 4-4Z" />
  </Svg>
);
const Memo = memo(SvgWallFill);
export default Memo;
