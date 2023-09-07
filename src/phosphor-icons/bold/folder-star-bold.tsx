import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderStarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112.56 196H44V92h168v20a12 12 0 0 0 24 0V88a20 20 0 0 0-20-20h-82.61l-26-29.29A20 20 0 0 0 92.41 32H40a20 20 0 0 0-20 20v148.62A19.41 19.41 0 0 0 39.38 220h73.18a12 12 0 0 0 0-24ZM44 56h46.61l10.67 12H44Zm199.44 102a12 12 0 0 0-10.52-8.34l-27.42-2.12-10.5-24.29a12 12 0 0 0-22 0l-10.5 24.28-27.42 2.12a12 12 0 0 0-6.72 21.22l20.58 17-6.25 25.26a12 12 0 0 0 17.73 13.22L184 212.46l23.58 13.88a12 12 0 0 0 17.73-13.22l-6.25-25.26 20.58-17a12 12 0 0 0 3.8-12.86ZM198 174.16a12 12 0 0 0-4 12.13l1.21 4.89-5.07-3a12.06 12.06 0 0 0-12.18 0l-5.07 3 1.21-4.89a12 12 0 0 0-4-12.13l-3.48-2.87 5-.39a12 12 0 0 0 10.1-7.21l2.33-5.4 2.33 5.4a12 12 0 0 0 10.09 7.21l5 .39Z" />
  </Svg>
);
const Memo = memo(SvgFolderStarBold);
export default Memo;
