import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighHeelBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.93 160.31-45.82-11.17L72.49 39.51a12 12 0 0 0-17.34.39C32.48 64.68 20 96 20 128v72a20 20 0 0 0 20 20h32a20 20 0 0 0 20-20v-41.71l1.07.71a108.44 108.44 0 0 1 39.11 48.6 19.9 19.9 0 0 0 18.54 12.4H236a20 20 0 0 0 20-20v-4.73a35.68 35.68 0 0 0-28.07-34.96ZM68 196H44v-55.33a106.69 106.69 0 0 1 24 5.51Zm164 0h-78.65a132.44 132.44 0 0 0-46.67-56.77 131.08 131.08 0 0 0-62-22.63 106.69 106.69 0 0 1 20.19-50.76l102.64 102.65a12.06 12.06 0 0 0 5.65 3.17l49.2 12 .25.06a11.84 11.84 0 0 1 9.39 11.6Z" />
  </Svg>
);
const Memo = memo(SvgHighHeelBold);
export default Memo;
