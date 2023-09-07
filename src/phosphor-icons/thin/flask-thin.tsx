import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlaskThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M218.27 201.83 156 98V36h12a4 4 0 0 0 0-8H88a4 4 0 0 0 0 8h12v62L37.73 201.83A12 12 0 0 0 48 220h160a12 12 0 0 0 10.29-18.17ZM107.43 101.2a4.07 4.07 0 0 0 .57-2.06V36h40v63.14a4.07 4.07 0 0 0 .57 2.06l41 68.33c-12.76 3.94-32.54 4.68-59.75-9.1-18-9.14-35-13.24-50.54-12.29ZM211.46 210a3.94 3.94 0 0 1-3.48 2H48a4 4 0 0 1-3.43-6.06l29.53-49.21c15.54-2.43 33.05 1.21 52.07 10.84C144.54 176.86 160 180 172.42 180a65 65 0 0 0 21.36-3.46l17.63 29.38a3.92 3.92 0 0 1 .05 4.08Z" />
  </Svg>
);
const Memo = memo(SvgFlaskThin);
export default Memo;
