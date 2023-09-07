import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNewspaperFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 48H56a16 16 0 0 0-16 16v120a8 8 0 0 1-16 0V88a8 8 0 0 0-16 0v96.11A24 24 0 0 0 32 208h176a24 24 0 0 0 24-24V64a16 16 0 0 0-16-16Zm-40 104H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Zm0-32H96a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgNewspaperFill);
export default Memo;
