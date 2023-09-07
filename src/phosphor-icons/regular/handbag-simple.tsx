import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandbagSimple = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m239.89 198.12-14.26-120a16 16 0 0 0-16-14.12H176a48 48 0 0 0-96 0H46.33a16 16 0 0 0-16 14.12l-14.26 120A16 16 0 0 0 20 210.6a16.13 16.13 0 0 0 12 5.4h191.92a16.13 16.13 0 0 0 12.08-5.4 16 16 0 0 0 3.89-12.48ZM128 32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32ZM32 200 46.33 80h163.42l14.17 120Z" />
  </Svg>
);
const Memo = memo(SvgHandbagSimple);
export default Memo;
