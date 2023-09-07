import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M170 76a42 42 0 1 0-42 42 42 42 0 0 0 42-42Zm-42 30a30 30 0 1 1 30-30 30 30 0 0 1-30 30Zm60 24a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30ZM68 130a42 42 0 1 0 42 42 42 42 0 0 0-42-42Zm0 72a30 30 0 1 1 30-30 30 30 0 0 1-30 30Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreeLight);
export default Memo;
