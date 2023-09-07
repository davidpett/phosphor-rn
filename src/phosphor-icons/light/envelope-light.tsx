import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEnvelopeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 50H32a6 6 0 0 0-6 6v136a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a6 6 0 0 0-6-6Zm-96 85.86L47.42 62h161.16ZM101.67 128 38 186.36V69.64Zm8.88 8.14L124 148.42a6 6 0 0 0 8.1 0l13.4-12.28L208.58 194H47.43Zm43.78-8.14L218 69.64v116.72Z" />
  </Svg>
);
const Memo = memo(SvgEnvelopeLight);
export default Memo;
