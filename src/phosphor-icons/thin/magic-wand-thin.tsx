import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagicWandThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 152a4 4 0 0 1-4 4h-20v20a4 4 0 0 1-8 0v-20h-20a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4ZM56 68h20v20a4 4 0 0 0 8 0V68h20a4 4 0 0 0 0-8H84V40a4 4 0 0 0-8 0v20H56a4 4 0 0 0 0 8Zm128 128h-12v-12a4 4 0 0 0-8 0v12h-12a4 4 0 0 0 0 8h12v12a4 4 0 0 0 8 0v-12h12a4 4 0 0 0 0-8Zm32.48-118.83L77.17 216.49a12 12 0 0 1-17 0L39.51 195.8a12 12 0 0 1 0-17L178.83 39.51a12 12 0 0 1 17 0l20.65 20.69a12 12 0 0 1 0 16.97ZM170.34 112 144 85.66l-98.83 98.83a4 4 0 0 0 0 5.65l20.68 20.69a4 4 0 0 0 5.66 0Zm40.49-46.14-20.69-20.69a4 4 0 0 0-5.66 0L149.65 80 176 106.34l34.83-34.83a4 4 0 0 0 0-5.65Z" />
  </Svg>
);
const Memo = memo(SvgMagicWandThin);
export default Memo;
