import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46ZM128 170.87a31.93 31.93 0 0 0-32.31-9.77L111 128h34l15.27 33.1a31.93 31.93 0 0 0-32.27 9.77Zm40 35.5a88 88 0 0 1-32 9.22V192a16 16 0 0 1 32 0Zm22.22-16.14c-2 2-4.08 3.87-6.22 5.64V176a7.91 7.91 0 0 0-.74-3.35l-48-104a8 8 0 0 0-14.52 0l-48 104A7.91 7.91 0 0 0 72 176v19.87a88.917 88.917 0 0 1-6.22-5.64 88 88 0 1 1 124.44 0Z" />
  </Svg>
);
const Memo = memo(SvgPencilCircleFill);
export default Memo;
