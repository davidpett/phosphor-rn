import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLighthouseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 82a6 6 0 0 0-6 6v18h-15l-5-50.6a6 6 0 0 0-2-3.88l-42.89-38.15-.15-.12a14 14 0 0 0-17.92 0l-.15.12L76 51.52a6 6 0 0 0-2 3.88L69 106H54V88a6 6 0 0 0-12 0v24a6 6 0 0 0 6 6h19.75l-9.69 96.67A14 14 0 0 0 72 230h112a14 14 0 0 0 13.93-15.36L188.25 118H208a6 6 0 0 0 6-6V88a6 6 0 0 0-6-6Zm-81.23-59.58a2 2 0 0 1 2.46 0l31 27.58H95.77ZM85.43 62h85.14l4.43 44h-41V88a6 6 0 0 0-12 0v18H81Zm100 155.35a2 2 0 0 1-1.43.65H72a2 2 0 0 1-2-2.16L74.2 174h107.6l4.2 41.81a2 2 0 0 1-.52 1.54ZM180.6 162H75.4l4.41-44h96.38Z" />
  </Svg>
);
const Memo = memo(SvgLighthouseLight);
export default Memo;
