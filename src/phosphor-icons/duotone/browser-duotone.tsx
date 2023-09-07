import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBrowserDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 56v40H32V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z" opacity={0.2} />
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v32H40V56Zm0 144H40v-96h176v96Z" />
  </Svg>
);
const Memo = memo(SvgBrowserDuotone);
export default Memo;
