import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFaceMaskLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174 104a6 6 0 0 1-6 6H88a6 6 0 0 1 0-12h80a6 6 0 0 1 6 6Zm-6 26H88a6 6 0 0 0 0 12h80a6 6 0 0 0 0-12Zm86-26v24a30 30 0 0 1-30 30h-6.45c-6.2 14.54-18.81 27.31-37.35 37.61-20.78 11.54-43 16.77-49.36 18.09a13.59 13.59 0 0 1-5.68 0c-6.33-1.32-28.58-6.55-49.36-18.09-18.54-10.3-31.15-23.07-37.35-37.61H32a30 30 0 0 1-30-30v-24a30 30 0 0 1 30-30h2.35a14 14 0 0 1 8.87-10.07l80-29.09a14 14 0 0 1 9.56 0l80 29.09A14 14 0 0 1 221.65 74H224a30 30 0 0 1 30 30ZM34.87 146a56.38 56.38 0 0 1-.87-9.85V86h-2a18 18 0 0 0-18 18v24a18 18 0 0 0 18 18ZM210 136.15V77.09a2 2 0 0 0-1.32-1.88l-80-29.09a2 2 0 0 0-1.36 0l-80 29.09A2 2 0 0 0 46 77.09v59.06a43.14 43.14 0 0 0 2.32 14.06c12.52 36.65 71.83 50.17 79.3 51.74a1.94 1.94 0 0 0 .76 0c8.35-1.74 81.62-18.46 81.62-65.8ZM242 104a18 18 0 0 0-18-18h-2v50.15a56.38 56.38 0 0 1-.87 9.85H224a18 18 0 0 0 18-18Z" />
  </Svg>
);
const Memo = memo(SvgFaceMaskLight);
export default Memo;
