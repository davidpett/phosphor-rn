import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGearFineThin = (props: SvgProps) => (
  <Svg
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 124h-20.1a83.35 83.35 0 0 0-9.27-34.47l17.44-10.07a4 4 0 0 0-4-6.92l-17.45 10.07a84.54 84.54 0 0 0-25.23-25.23l10.07-17.45a4 4 0 0 0-6.92-4l-10.07 17.44A83.35 83.35 0 0 0 132 44.1V24a4 4 0 0 0-8 0v20.1a83.35 83.35 0 0 0-34.47 9.27L79.46 35.93a4 4 0 0 0-6.92 4l10.07 17.45a84.54 84.54 0 0 0-25.23 25.23L39.93 72.54a4 4 0 1 0-4 6.92l17.44 10.07A83.35 83.35 0 0 0 44.1 124H24a4 4 0 0 0 0 8h20.1a83.35 83.35 0 0 0 9.27 34.47l-17.44 10.07a4 4 0 0 0 2 7.46 3.9 3.9 0 0 0 2-.54l17.45-10.07a84.54 84.54 0 0 0 25.23 25.23l-10.07 17.45a4 4 0 0 0 1.46 5.46 4 4 0 0 0 5.46-1.46l10.07-17.44A83.35 83.35 0 0 0 124 211.9V232a4 4 0 0 0 8 0v-20.1a83.35 83.35 0 0 0 34.47-9.27l10.07 17.44a4 4 0 0 0 6.92-4l-10.07-17.45a84.54 84.54 0 0 0 25.23-25.23l17.45 10.07a3.9 3.9 0 0 0 2 .54 4 4 0 0 0 2-7.46l-17.44-10.07A83.35 83.35 0 0 0 211.9 132H232a4 4 0 0 0 0-8ZM128 52a76.09 76.09 0 0 1 75.89 72h-73.58L93.53 60.3A75.59 75.59 0 0 1 128 52Zm-76 76a76 76 0 0 1 34.61-63.69L123.38 128l-36.77 63.69A76 76 0 0 1 52 128Zm76 76a75.59 75.59 0 0 1-34.47-8.3l36.78-63.7h73.58A76.09 76.09 0 0 1 128 204Z" />
  </Svg>
);
const Memo = memo(SvgGearFineThin);
export default Memo;
