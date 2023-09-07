import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShieldSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 56v58.8a138.72 138.72 0 0 1-7.77 46.8 12 12 0 1 1-22.6-8.08A114.62 114.62 0 0 0 204 114.8V60h-94.67a12 12 0 1 1 0-24H208a20 20 0 0 1 20 20Zm-11.12 151.93a12 12 0 1 1-17.76 16.15l-11.74-12.92A151.78 151.78 0 0 1 134.24 243a19.63 19.63 0 0 1-12.49 0C106.1 237.78 28 207.16 28 114.8V56a20 20 0 0 1 8-16 12 12 0 0 1 20.87-8.1Zm-45.64-14.52L52 62.24v52.56c0 73.56 60.53 99.53 76 105a126.88 126.88 0 0 0 43.24-26.39Z" />
  </Svg>
);
const Memo = memo(SvgShieldSlashBold);
export default Memo;
