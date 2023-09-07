import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHFourBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 176a12 12 0 0 1-12 12v20a12 12 0 0 1-24 0v-20h-36a12 12 0 0 1-11.38-15.79l24-72a12 12 0 0 1 22.76 7.58L200.65 164H220v-20a12 12 0 0 1 24 0v20a12 12 0 0 1 12 12ZM144 44a12 12 0 0 0-12 12v48H52V56a12 12 0 0 0-24 0v120a12 12 0 0 0 24 0v-48h80v48a12 12 0 0 0 24 0V56a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgTextHFourBold);
export default Memo;
