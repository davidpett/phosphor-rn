import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPepperLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M165.57 42.26A38.07 38.07 0 0 0 128 10a6 6 0 0 0 0 12 26 26 0 0 1 25.38 20.35A62.08 62.08 0 0 0 98 104c0 47.75-26.23 79.68-78 94.93a14 14 0 0 0 1.56 27.24A262.5 262.5 0 0 0 66.81 230c40.36 0 85.23-9 116.19-35 25.88-21.71 39-52.33 39-91a62.06 62.06 0 0 0-56.43-61.74ZM160 54a50.09 50.09 0 0 1 47.82 35.38L192 97.28l-29.32-14.66a6 6 0 0 0-5.36 0L128 97.28l-15.81-7.91A50.07 50.07 0 0 1 160 54Zm15.28 131.82C150.15 206.89 95.36 227 23.67 214.33a1.88 1.88 0 0 1-1.67-1.89 1.81 1.81 0 0 1 1.43-2C80.06 193.73 110 156.92 110 104c0-.76 0-1.51.06-2.26l15.26 7.63a6 6 0 0 0 5.36 0L160 94.69l29.32 14.66a6 6 0 0 0 5.36 0l15.26-7.63c0 .75.06 1.5.06 2.26 0 35.02-11.68 62.51-34.72 81.83Z" />
  </Svg>
);
const Memo = memo(SvgPepperLight);
export default Memo;
