import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEnvelopeOpenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m230.66 86-96-64a12 12 0 0 0-13.32 0l-96 64A12 12 0 0 0 20 96v104a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V96a12 12 0 0 0-5.34-10ZM89.81 152 44 184.31v-65Zm24.55 12h27.28L187 196H69.05Zm51.83-12L212 119.29v65ZM128 46.42l74.86 49.91L141.61 140h-27.22L53.14 96.33Z" />
  </Svg>
);
const Memo = memo(SvgEnvelopeOpenBold);
export default Memo;
