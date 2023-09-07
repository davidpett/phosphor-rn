import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLayoutThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM40 52h176a4 4 0 0 1 4 4v44H36V56a4 4 0 0 1 4-4Zm-4 148v-92h64v96H40a4 4 0 0 1-4-4Zm180 4H108v-96h112v92a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgLayoutThin);
export default Memo;
