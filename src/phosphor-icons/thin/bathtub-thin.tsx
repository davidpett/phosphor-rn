import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBathtubThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 100h-28v-4a4 4 0 0 0-4-4h-64a4 4 0 0 0-4 4v4H60V52a16 16 0 0 1 16-16 16.49 16.49 0 0 1 16.08 12.8 4 4 0 1 0 7.84-1.6A24.32 24.32 0 0 0 76 28a24 24 0 0 0-24 24v48H24a12 12 0 0 0-12 12v32a52.06 52.06 0 0 0 52 52h4v20a4 4 0 0 0 8 0v-20h104v20a4 4 0 0 0 8 0v-20h4a52.06 52.06 0 0 0 52-52v-32a12 12 0 0 0-12-12Zm-92 0h56v40h-56Zm96 44a44.05 44.05 0 0 1-44 44H64a44.05 44.05 0 0 1-44-44v-32a4 4 0 0 1 4-4h108v36a4 4 0 0 0 4 4h64a4 4 0 0 0 4-4v-36h28a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgBathtubThin);
export default Memo;
