import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTipiThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M235.37 213.84 132.75 53.5l22.62-35.34a4 4 0 1 0-6.74-4.32L128 46.08l-20.63-32.24a4 4 0 0 0-6.74 4.32l22.62 35.34L20.63 213.84A4 4 0 0 0 24 220h208a4 4 0 0 0 3.37-6.16ZM79 212l49-76.58L177 212Zm107.52 0-55.14-86.16a4 4 0 0 0-6.74 0L69.49 212H31.31L128 60.92 224.69 212Z" />
  </Svg>
);
const Memo = memo(SvgTipiThin);
export default Memo;
