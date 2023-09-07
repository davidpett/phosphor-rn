import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.83 181.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L222.34 188h-21.4a68.15 68.15 0 0 1-55.34-28.48l-41.71-58.39A60.11 60.11 0 0 0 55.06 76H32a4 4 0 0 1 0-8h23.06a68.15 68.15 0 0 1 55.34 28.48l41.71 58.39A60.11 60.11 0 0 0 200.94 180h21.4l-17.17-17.17a4 4 0 0 1 5.66-5.66Zm-89.49-77.44a4 4 0 0 0 5.58-.93l1.19-1.67A60.11 60.11 0 0 1 200.94 76h21.4l-17.17 17.17a4 4 0 0 0 5.66 5.66l24-24a4 4 0 0 0 0-5.66l-24-24a4 4 0 0 0-5.66 5.66L222.34 68h-21.4a68.15 68.15 0 0 0-55.34 28.48l-1.19 1.67a4 4 0 0 0 .93 5.58Zm-34.68 48.54a4 4 0 0 0-5.58.93l-1.19 1.67A60.11 60.11 0 0 1 55.06 180H32a4 4 0 0 0 0 8h23.06a68.15 68.15 0 0 0 55.34-28.48l1.19-1.67a4 4 0 0 0-.93-5.58Z" />
  </Svg>
);
const Memo = memo(SvgShuffleThin);
export default Memo;
