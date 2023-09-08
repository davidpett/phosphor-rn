import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileTsx = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214.51 156.65 197.83 180l16.68 23.35a8 8 0 0 1-13 9.3L188 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L178.17 180l-16.68-23.35a8 8 0 0 1 13-9.3L188 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm-90.91 14.66c-4-1.16-8.14-2.35-10.45-3.84-1.25-.82-1.23-1-1.11-1.9a4.54 4.54 0 0 1 2-3.67c4.6-3.12 15.34-1.73 19.83-.56a8 8 0 0 0 4.13-15.48c-2.12-.55-21-5.22-32.84 2.76a20.58 20.58 0 0 0-9 14.95c-2 15.88 13.65 20.41 23 23.11 12.06 3.49 13.12 4.92 12.78 7.59-.31 2.41-1.26 3.33-2.14 3.93-4.6 3.06-15.17 1.56-19.55.35a8 8 0 0 0-4.31 15.45 60.63 60.63 0 0 0 15.19 2c5.82 0 12.3-1 17.49-4.46a20.82 20.82 0 0 0 9.19-15.23c2.19-17.31-14.32-22.14-24.21-25ZM80 144H40a8 8 0 0 0 0 16h12v48a8 8 0 0 0 16 0v-48h12a8 8 0 0 0 0-16Zm136-56v24a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40H56v72a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88Zm-27.31-8L160 51.31V80Z" />
  </Svg>
);
const Memo = memo(SvgFileTsx);
export default Memo;
