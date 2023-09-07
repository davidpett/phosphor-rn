import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgJeepFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 103.47a8.17 8.17 0 0 0-8.27-7.47h-9.26l-9.29-43.35A16.08 16.08 0 0 0 205.53 40H50.47a16.08 16.08 0 0 0-15.65 12.65L25.53 96h-9.26A8.17 8.17 0 0 0 8 103.47a8 8 0 0 0 8 8.53h8v96a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-24h20a4 4 0 0 0 4-4v-43.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v44a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-43.75a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v44a4 4 0 0 0 4 4h20v24a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V112h8a8 8 0 0 0 8-8.53ZM68 152a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm120 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgJeepFill);
export default Memo;
