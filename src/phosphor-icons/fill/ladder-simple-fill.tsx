import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLadderSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 24a8 8 0 0 0-8 8v8H72v-8a8 8 0 0 0-16 0v192a8 8 0 0 0 16 0v-8h112v8a8 8 0 0 0 16 0V32a8 8 0 0 0-8-8Zm-16 160H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Zm0-48H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgLadderSimpleFill);
export default Memo;
