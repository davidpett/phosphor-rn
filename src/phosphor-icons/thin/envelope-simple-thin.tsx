import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEnvelopeSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4Zm-10.28 8L128 138.57 42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgEnvelopeSimpleThin);
export default Memo;
