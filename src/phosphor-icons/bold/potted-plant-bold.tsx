import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPottedPlantBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 144h-71l21.24-21.25a60.11 60.11 0 0 0 24 5.22 51.69 51.69 0 0 0 27-7.54c24-14.57 37-47.79 34.54-88.87a12 12 0 0 0-11.27-11.27c-41.09-2.41-74.31 10.49-88.87 34.54-9.24 15.24-10 33.4-2.33 51L120 119l-11.14-11.13c4.94-12.89 4-26.12-2.76-37.36C95 52.25 70.12 42.4 39.49 44.21a12 12 0 0 0-11.28 11.27c-1.8 30.64 8 55.54 26.32 66.61a40.27 40.27 0 0 0 21 5.9 45.58 45.58 0 0 0 16.31-3.13L103 136l-8 8H56a12 12 0 0 0 0 24h7.27l11.63 52.34A19.89 19.89 0 0 0 94.42 236h67.17a19.88 19.88 0 0 0 19.52-15.66L192.74 168H200a12 12 0 0 0 0-24Zm-43.9-76.74C164.8 52.89 185.29 44.5 212 44c-.48 26.69-8.87 47.18-23.25 55.89-9.43 5.71-20.45 5.48-32-.62-6.14-11.56-6.36-22.58-.65-32.01ZM85.51 101.5c-5.23 2.53-12 4-18.54.07-8.47-5.13-13.81-17.48-14.8-33.4 15.93 1 28.27 6.32 33.4 14.79 3.94 6.52 2.43 13.31-.06 18.54ZM158.38 212H97.62l-9.77-44h80.31Z" />
  </Svg>
);
const Memo = memo(SvgPottedPlantBold);
export default Memo;
