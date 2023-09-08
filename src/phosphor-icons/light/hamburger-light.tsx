import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHamburgerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48.07 102h159.86a14 14 0 0 0 13.76-17c-7.24-34.17-46.64-59-93.69-59S41.55 50.83 34.31 85a14 14 0 0 0 13.76 17Zm-2-14.48C52 59.29 87.25 38 128 38s76 21.29 82 49.52a2 2 0 0 1-2 2.48H48.07a2 2 0 0 1-2-2.48ZM230 154.36l-41.9 15.22-37.87-15.15a6 6 0 0 0-4.46 0L108 169.54l-37.77-15.11a6 6 0 0 0-4.28-.07l-44 16A6 6 0 0 0 24 182a6.11 6.11 0 0 0 2.05-.36l16-5.8V184a38 38 0 0 0 38 38h96a38 38 0 0 0 38-38v-11.07l20.05-7.29a6 6 0 0 0-4.1-11.28ZM202 184a26 26 0 0 1-26 26H80a26 26 0 0 1-26-26v-12.52l13.9-5.06 37.87 15.15a6 6 0 0 0 4.46 0L148 166.46l37.77 15.11a6 6 0 0 0 4.28.07l11.95-4.35ZM18 128a6 6 0 0 1 6-6h208a6 6 0 0 1 0 12H24a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgHamburgerLight);
export default Memo;
