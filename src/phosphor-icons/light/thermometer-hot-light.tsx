import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThermometerHotLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M179.06 79.41a6 6 0 0 1 1.53-8.35c9.76-6.73 25.06-6.73 34.82 0 5.64 3.89 15.54 3.89 21.18 0a6 6 0 1 1 6.82 9.88 32.54 32.54 0 0 1-34.82 0c-5.64-3.89-15.54-3.89-21.18 0a6 6 0 0 1-8.35-1.53Zm57.53 23.65c-5.64 3.89-15.54 3.89-21.18 0-9.76-6.73-25.06-6.73-34.82 0a6 6 0 1 0 6.82 9.88c5.64-3.89 15.54-3.89 21.18 0a32.54 32.54 0 0 0 34.82 0 6 6 0 0 0-6.82-9.88ZM150 184a30 30 0 1 1-36-29.4V48a6 6 0 0 1 12 0v106.6a30.05 30.05 0 0 1 24 29.4Zm-12 0a18 18 0 1 0-18 18 18 18 0 0 0 18-18Zm44 0a62 62 0 1 1-100-49V48a38 38 0 0 1 76 0v87a62.06 62.06 0 0 1 24 49Zm-12 0a50.07 50.07 0 0 0-21.43-41 6 6 0 0 1-2.57-5V48a26 26 0 0 0-52 0v90a6 6 0 0 1-2.57 5A50 50 0 1 0 170 184Z" />
  </Svg>
);
const Memo = memo(SvgThermometerHotLight);
export default Memo;
