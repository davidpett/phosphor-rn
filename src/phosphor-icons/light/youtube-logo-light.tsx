import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYoutubeLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m163.33 123-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10ZM118 148.79v-41.58L149.18 128ZM232.4 70a22 22 0 0 0-13.28-15C185 41.79 130.27 42 128 42s-57-.21-91.16 13A22 22 0 0 0 23.6 70c-2.55 9.89-5.6 28-5.6 58s3.05 48.11 5.6 58a22 22 0 0 0 13.28 15C71 214.21 125.72 214 128 214h.71c6.91 0 58-.44 90.45-13a22 22 0 0 0 13.28-15c2.55-9.87 5.6-27.93 5.6-58S235 79.89 232.4 70Zm-11.62 113a10 10 0 0 1-6 6.86c-32 12.33-86.2 12.14-86.78 12.14s-54.71.2-86.75-12.17a10 10 0 0 1-6-6.86C32.84 173.78 30 156.78 30 128s2.84-45.78 5.22-55a10 10 0 0 1 6-6.86C72.06 54.26 123.53 54 127.76 54h.24c.54 0 54.71-.2 86.75 12.17a10 10 0 0 1 6 6.86c2.38 9.19 5.22 26.19 5.22 55s-2.81 45.75-5.19 54.97Z" />
  </Svg>
);
const Memo = memo(SvgYoutubeLogoLight);
export default Memo;
