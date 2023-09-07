import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236.24 179.76a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L217.52 190h-16.58a70.16 70.16 0 0 1-57-29.31l-41.71-58.4A58.11 58.11 0 0 0 55.06 78H32a6 6 0 0 1 0-12h23.06a70.16 70.16 0 0 1 57 29.31l41.71 58.4A58.11 58.11 0 0 0 200.94 178h16.58l-13.76-13.76a6 6 0 0 1 8.48-8.48Zm-92.06-74.41a5.91 5.91 0 0 0 3.48 1.12 6 6 0 0 0 4.89-2.51l1.19-1.67A58.11 58.11 0 0 1 200.94 78h16.58l-13.76 13.76a6 6 0 1 0 8.48 8.48l24-24a6 6 0 0 0 0-8.48l-24-24a6 6 0 0 0-8.48 8.48L217.52 66h-16.58a70.16 70.16 0 0 0-57 29.31L142.78 97a6 6 0 0 0 1.4 8.35Zm-32.36 45.3a6 6 0 0 0-8.37 1.39l-1.19 1.67A58.11 58.11 0 0 1 55.06 178H32a6 6 0 0 0 0 12h23.06a70.16 70.16 0 0 0 57-29.31l1.19-1.67a6 6 0 0 0-1.43-8.37Z" />
  </Svg>
);
const Memo = memo(SvgShuffleLight);
export default Memo;
