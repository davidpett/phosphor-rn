import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandCoinsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-45.24 10.4A26 26 0 0 0 140 114H89.94a29.78 29.78 0 0 0-21.21 8.79L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7.16 7.16 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2Zm206.28-30-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41.24-.06a10.6 10.6 0 0 1 7.7 19.62ZM164 94a34.54 34.54 0 0 0 7.28-.78 34 34 0 1 0 25.46-42.43A34 34 0 1 0 164 94Zm62-10a22 22 0 1 1-22-22 22 22 0 0 1 22 22Zm-62-46a21.94 21.94 0 0 1 21.51 17.49 34 34 0 0 0-15.38 25.65A22 22 0 1 1 164 38Z" />
  </Svg>
);
const Memo = memo(SvgHandCoinsLight);
export default Memo;
