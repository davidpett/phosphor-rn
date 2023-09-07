import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 80a40 40 0 1 1-40-40 40 40 0 0 1 40 40Zm56 40a40 40 0 1 0-40-40 40 40 0 0 0 40 40Zm-96 16a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm96 0a40 40 0 1 0 40 40 40 40 0 0 0-40-40Z" />
  </Svg>
);
const Memo = memo(SvgCirclesFourFill);
export default Memo;
