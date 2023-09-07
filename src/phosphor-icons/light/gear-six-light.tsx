import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGearSixLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 82a46 46 0 1 0 46 46 46.06 46.06 0 0 0-46-46Zm0 80a34 34 0 1 1 34-34 34 34 0 0 1-34 34Zm108-54.4a6 6 0 0 0-2.92-4l-30.44-17.38-.42-.71-.12-34.31a6 6 0 0 0-2.1-4.56 110.12 110.12 0 0 0-36.07-20.31 6 6 0 0 0-4.84.45l-30.63 17.08h-1l-30.55-17.1a6 6 0 0 0-4.86-.44A109.92 109.92 0 0 0 56 46.68a6 6 0 0 0-2.12 4.55l-.16 34.34c-.14.23-.28.47-.41.71l-30.4 17.29a6 6 0 0 0-2.91 4.05 104.81 104.81 0 0 0 0 40.78 6 6 0 0 0 2.92 4l30.42 17.33.42.71.12 34.31a6 6 0 0 0 2.12 4.61 110.12 110.12 0 0 0 36.07 20.31 6 6 0 0 0 4.84-.45l30.61-17.08h1l30.56 17.1a6.09 6.09 0 0 0 2.92.76 5.83 5.83 0 0 0 1.93-.32 109.92 109.92 0 0 0 36-20.36 6 6 0 0 0 2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6 6 0 0 0 2.92-4.05 104.81 104.81 0 0 0 .04-40.78Zm-11.25 35.79-29.43 16.71a6.07 6.07 0 0 0-2.28 2.3c-.59 1-1.21 2.11-1.86 3.14a6 6 0 0 0-.91 3.16l-.16 33.21a98.15 98.15 0 0 1-27.52 15.53L133 200.88a6 6 0 0 0-2.93-.77H126.19a6 6 0 0 0-3.07.76l-29.67 16.56a98 98 0 0 1-27.56-15.49l-.12-33.17a6 6 0 0 0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6 6 0 0 0-2.27-2.3L31.3 143.4a93 93 0 0 1 0-30.79L60.68 95.9A6.07 6.07 0 0 0 63 93.6c.59-1 1.21-2.11 1.86-3.14a6 6 0 0 0 .91-3.16l.16-33.21a98.15 98.15 0 0 1 27.48-15.53L123 55.12a5.81 5.81 0 0 0 3.07.76h3.74a6 6 0 0 0 3.07-.76l29.65-16.56a98 98 0 0 1 27.56 15.49l.12 33.17a6 6 0 0 0 .91 3.16c.64 1 1.27 2.08 1.86 3.14a6 6 0 0 0 2.27 2.3l29.45 16.78a93 93 0 0 1 .03 30.79Z" />
  </Svg>
);
const Memo = memo(SvgGearSixLight);
export default Memo;
