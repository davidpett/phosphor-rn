import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAnchorBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 132a12 12 0 0 0-12 12 36 36 0 0 1-36 36 51.7 51.7 0 0 0-28 8.22V132h28a12 12 0 0 0 0-24h-28V89.94a36 36 0 1 0-24 0V108H88a12 12 0 0 0 0 24h28v56.22A51.7 51.7 0 0 0 88 180a36 36 0 0 1-36-36 12 12 0 0 0-24 0 60.07 60.07 0 0 0 60 60 28 28 0 0 1 28 28 12 12 0 0 0 24 0 28 28 0 0 1 28-28 60.07 60.07 0 0 0 60-60 12 12 0 0 0-12-12Zm-88-88a12 12 0 1 1-12 12 12 12 0 0 1 12-12Z" />
  </Svg>
);
const Memo = memo(SvgAnchorBold);
export default Memo;
