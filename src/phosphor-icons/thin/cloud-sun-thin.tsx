import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudSunThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 76a71.85 71.85 0 0 0-22.14 3.48A51.78 51.78 0 0 0 121 63.83l11.56-16.51a4 4 0 0 0-6.56-4.59l-11.55 16.51A52 52 0 0 0 88 52c-1.71 0-3.4.09-5.06.25l-3.5-19.85a4 4 0 0 0-7.88 1.39l3.5 19.84A52.19 52.19 0 0 0 47.85 71L31.32 59.42A4 4 0 1 0 26.73 66l16.53 11.54A51.63 51.63 0 0 0 36 104c0 1.69.09 3.37.25 5l-19.85 3.5a4 4 0 0 0 .69 7.94 4.23 4.23 0 0 0 .7-.06l19.85-3.5A52.07 52.07 0 0 0 46 134.6 48 48 0 0 0 76 220h80a72 72 0 0 0 0-144ZM44 104a44 44 0 0 1 82.33-21.61 72.23 72.23 0 0 0-38.82 43A48.28 48.28 0 0 0 76 124a47.76 47.76 0 0 0-23.4 6.11A44 44 0 0 1 44 104Zm112 108H76a40 40 0 1 1 9.43-78.88A71.63 71.63 0 0 0 84 143.77a4 4 0 0 0 8 .46 64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 156 212Z" />
  </Svg>
);
const Memo = memo(SvgCloudSunThin);
export default Memo;
