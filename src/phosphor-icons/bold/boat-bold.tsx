import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoatBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222.33 106.84 212 103.39V56a20 20 0 0 0-20-20h-52V24a12 12 0 0 0-24 0v12H64a20 20 0 0 0-20 20v47.39l-10.33 3.45a20 20 0 0 0-13.67 19v34.26a12.21 12.21 0 0 0 .46 3.29c16.34 57.25 88.68 76.76 103 80.09a20 20 0 0 0 9.06 0c14.33-3.33 86.67-22.84 103-80.09a12.21 12.21 0 0 0 .46-3.29v-34.28a20 20 0 0 0-13.65-18.98ZM68 60h120v35.38l-56.2-18.76a12 12 0 0 0-7.6 0L68 95.38Zm144 98.34c-13.46 42.62-73.44 59-84 61.55-10.55-2.57-70.54-18.92-84-61.55v-29.65l72-24V168a12 12 0 0 0 24 0v-63.34l72 24Z" />
  </Svg>
);
const Memo = memo(SvgBoatBold);
export default Memo;
