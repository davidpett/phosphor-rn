import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDogLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M102 140a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm62-10a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm65.77 10.72a14.24 14.24 0 0 1-5.89 1.29 13.72 13.72 0 0 1-9.88-4.23V184a38 38 0 0 1-38 38H80a38 38 0 0 1-38-38v-46.22a13.76 13.76 0 0 1-9.89 4.22 14.23 14.23 0 0 1-5.88-1.29 13.82 13.82 0 0 1-8-15.34l16.42-88a14 14 0 0 1 17.16-11l.24.07L104.86 42h46.28l52.79-15.51.24-.07a14 14 0 0 1 17.16 11l16.42 88a13.81 13.81 0 0 1-7.98 15.3ZM93.88 51.27 48.84 38a1.9 1.9 0 0 0-1.49.27 2 2 0 0 0-.88 1.32l-16.42 88a2 2 0 0 0 3.54 1.61ZM202 184v-61.57L149.06 54h-42.12L54 122.43V184a26 26 0 0 0 26 26h42v-15.52l-14.24-14.24a6 6 0 0 1 8.48-8.48L128 183.51l11.76-11.75a6 6 0 0 1 8.48 8.48L134 194.48V210h42a26 26 0 0 0 26-26Zm24-56.4-16.42-88a2 2 0 0 0-.88-1.31 2.07 2.07 0 0 0-1.49-.27l-45 13.23 60.32 78a2 2 0 0 0 3.47-1.65Z" />
  </Svg>
);
const Memo = memo(SvgDogLight);
export default Memo;
