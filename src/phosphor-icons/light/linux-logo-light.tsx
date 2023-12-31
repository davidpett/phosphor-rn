import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLinuxLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.74 220.69a6 6 0 0 1-8.42-.94C218 218.05 186 177.17 186 96a58 58 0 0 0-116 0c0 81.17-31.95 122.05-33.31 123.75a6 6 0 0 1-9.38-7.49C27.68 211.79 58 172.56 58 96a70 70 0 0 1 140 0c0 76.63 30.38 115.87 30.69 116.26a6 6 0 0 1-.95 8.43ZM100 98a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm66 10a10 10 0 1 0-10 10 10 10 0 0 0 10-10Zm-67.31 30.63a6 6 0 0 0-5.37 10.74l32 16a6 6 0 0 0 2.68.63 6.07 6.07 0 0 0 2.69-.63l32-16a6 6 0 0 0-5.37-10.74L128 153.29ZM128 186a52.07 52.07 0 0 0-45.24 27.08 6 6 0 0 0 10.49 5.84 39.33 39.33 0 0 1 69.51 0A6 6 0 0 0 168 222a5.89 5.89 0 0 0 2.91-.76 6 6 0 0 0 2.33-8.16A52.09 52.09 0 0 0 128 186Z" />
  </Svg>
);
const Memo = memo(SvgLinuxLogoLight);
export default Memo;
