import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpeakerSimpleSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 152v-48a8 8 0 0 1 16 0v48a8 8 0 0 1-16 0Zm40-72a8 8 0 0 0-8 8v80a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8ZM53.92 34.62a8 8 0 1 0-11.84 10.76L73.55 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224v-48.91l42.08 46.29a8 8 0 1 0 11.84-10.76Zm92.16 77.59a8 8 0 0 0 13.92-5.38V32a8 8 0 0 0-12.91-6.31l-39.85 31a8 8 0 0 0-1 11.7Z" />
  </Svg>
);
const Memo = memo(SvgSpeakerSimpleSlashFill);
export default Memo;
