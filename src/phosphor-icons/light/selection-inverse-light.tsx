import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionInverseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150 216a6 6 0 0 1-6 6h-32a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6ZM40 150a6 6 0 0 0 6-6v-32a6 6 0 0 0-12 0v32a6 6 0 0 0 6 6Zm32 60H48a2 2 0 0 1-2-2v-24a6 6 0 0 0-12 0v24a14 14 0 0 0 14 14h24a6 6 0 0 0 0-12ZM222 48v160a14 14 0 0 1-14 14h-24a6 6 0 0 1 0-12h17.51L46 54.48V72a6 6 0 0 1-12 0V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14Zm-14-2H54.49L210 201.52V48a2 2 0 0 0-2-2Z" />
  </Svg>
);
const Memo = memo(SvgSelectionInverseLight);
export default Memo;
