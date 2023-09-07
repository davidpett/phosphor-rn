import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudSun = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 72a76.2 76.2 0 0 0-20.26 2.73 55.63 55.63 0 0 0-9.41-11.54l9.51-13.57a8 8 0 1 0-13.11-9.18L113.22 54A55.9 55.9 0 0 0 88 48h-1.74l-2.89-16.29a8 8 0 1 0-15.75 2.77l2.88 16.34a56.1 56.1 0 0 0-23.27 14.85l-13.62-9.53a8 8 0 1 0-9.17 13.11L38 78.77A55.55 55.55 0 0 0 32 104v1.72l-16.29 2.88a8 8 0 0 0 1.38 15.88 8.24 8.24 0 0 0 1.39-.12l16.32-2.88a55.74 55.74 0 0 0 5.86 12.42A52 52 0 0 0 76 224h80a76 76 0 0 0 0-152ZM48 104a40 40 0 0 1 72.54-23.24 76.26 76.26 0 0 0-35.62 40 52.14 52.14 0 0 0-31 4.17A40 40 0 0 1 48 104Zm108 104H76a36 36 0 1 1 4.78-71.69c-.37 2.37-.63 4.79-.77 7.23a8 8 0 0 0 16 .92 58.91 58.91 0 0 1 1.88-11.81c0-.16.09-.32.12-.48A60.06 60.06 0 1 1 156 208Z" />
  </Svg>
);
const Memo = memo(SvgCloudSun);
export default Memo;
