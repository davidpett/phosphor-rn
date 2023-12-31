import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVirusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 128a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm60-20a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm-40 40a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm124-20a12 12 0 0 1-12 12h-12.72a99.62 99.62 0 0 1-20.62 49.69l9.83 9.82a12 12 0 0 1-17 17l-9.82-9.83a99.62 99.62 0 0 1-49.67 20.6V240a12 12 0 0 1-24 0v-12.72a99.62 99.62 0 0 1-49.69-20.62l-9.82 9.83a12 12 0 0 1-17-17l9.83-9.82A99.62 99.62 0 0 1 28.72 140H16a12 12 0 0 1 0-24h12.72a99.62 99.62 0 0 1 20.62-49.69l-9.83-9.82a12 12 0 0 1 17-17l9.82 9.83A99.62 99.62 0 0 1 116 28.72V16a12 12 0 0 1 24 0v12.72a99.62 99.62 0 0 1 49.69 20.62l9.82-9.83a12 12 0 0 1 17 17l-9.83 9.82a99.62 99.62 0 0 1 20.6 49.67H240a12 12 0 0 1 12 12Zm-48 0a76 76 0 1 0-76 76 76.08 76.08 0 0 0 76-76Z" />
  </Svg>
);
const Memo = memo(SvgVirusBold);
export default Memo;
