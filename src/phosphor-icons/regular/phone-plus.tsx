import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhonePlus = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m222.36 158.46-47.1-21.11-.12-.06a16 16 0 0 0-15.18 1.4 8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06.61.61 0 0 1 0-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92 16 16 0 0 0-9.52-16.62ZM176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40 .61.61 0 0 0 0 .12l21 47-20.67 24.74a6.13 6.13 0 0 0-.57.77 16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14 6.92 6.92 0 0 0 .74-.57L168.89 152l47 21.06h.11A40.21 40.21 0 0 1 176 208ZM144 72a8 8 0 0 1 8-8h24V40a8 8 0 0 1 16 0v24h24a8 8 0 0 1 0 16h-24v24a8 8 0 0 1-16 0V80h-24a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgPhonePlus);
export default Memo;
