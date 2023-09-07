import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberThreeLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174 160a54 54 0 0 1-90 40.25 6 6 0 1 1 8-8.94A42 42 0 1 0 120 118a6 6 0 0 1-4.8-9.6L156 54H88a6 6 0 0 1 0-12h80a6 6 0 0 1 4.8 9.6l-41.67 55.55A54.1 54.1 0 0 1 174 160Z" />
  </Svg>
);
const Memo = memo(SvgNumberThreeLight);
export default Memo;
