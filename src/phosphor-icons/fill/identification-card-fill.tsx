import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationCardFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 120a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm120-64v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-96.25 110a39.76 39.76 0 0 0-17.19-23.34 32 32 0 1 0-45.12 0A39.84 39.84 0 0 0 56.25 166a8 8 0 0 0 15.5 4c2.64-10.25 13.06-18 24.25-18s21.62 7.73 24.25 18a8 8 0 1 0 15.5-4ZM200 144a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8Zm0-32a8 8 0 0 0-8-8h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationCardFill);
export default Memo;
