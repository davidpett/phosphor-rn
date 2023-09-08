import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandHeartLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-4.32 1C227 119.55 238 99.51 238 80c0-25.36-20.39-46-45.46-46A45.51 45.51 0 0 0 156 52a45.51 45.51 0 0 0-36.54-18C94.39 34 74 54.64 74 80c0 11.38 3.63 22.49 11.29 34.36a29.73 29.73 0 0 0-16.56 8.43L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7.16 7.16 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM119.46 46a33.16 33.16 0 0 1 31 20.28 6 6 0 0 0 11.1 0 33.16 33.16 0 0 1 31-20.28C210.68 46 226 61.57 226 80c0 20.24-16.18 43-46.8 65.75l-14.87 3.42A26 26 0 0 0 140 114H99.67C90.36 101.67 86 90.81 86 80c0-18.43 15.32-34 33.46-34ZM14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2Zm206.28-30-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41.24-.06a10.6 10.6 0 0 1 7.7 19.62Z" />
  </Svg>
);
const Memo = memo(SvgHandHeartLight);
export default Memo;
