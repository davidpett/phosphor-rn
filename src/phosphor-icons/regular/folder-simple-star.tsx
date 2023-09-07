import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleStar = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 208a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h53.33a16.12 16.12 0 0 1 9.6 3.2L130.67 72H216a16 16 0 0 1 16 16v32a8 8 0 0 1-16 0V88h-85.33a16.12 16.12 0 0 1-9.6-3.2L93.33 64H40v136h80a8 8 0 0 1 8 8Zm109.09-40.22-22.51 18.59 6.85 27.71a8 8 0 0 1-11.82 8.81L184 207.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31 11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5 29.84 2.31a8 8 0 0 1 4.47 14.14Zm-25.47.28-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15 11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12 13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81-3.5-14.12a8 8 0 0 1 2.68-8.09Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleStar);
export default Memo;
