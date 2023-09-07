import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneIncomingLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m221.59 160.3-47.24-21.17a14 14 0 0 0-13.28 1.22 4.81 4.81 0 0 0-.56.42l-24.69 21a1.88 1.88 0 0 1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91 1.91 0 0 1 0-1.68l21.07-25a5.06 5.06 0 0 0 .42-.58 14 14 0 0 0 1.12-13.27L95.73 34.49a14 14 0 0 0-14.56-8.38A54.25 54.25 0 0 0 34 80c0 78.3 63.7 142 142 142a54.25 54.25 0 0 0 53.89-47.17 14 14 0 0 0-8.3-14.53ZM176 210c-71.68 0-130-58.32-130-130a42.23 42.23 0 0 1 36.67-42h.23a2 2 0 0 1 1.84 1.31l21.1 47.11a2 2 0 0 1 0 1.67l-21.11 25.06a4.73 4.73 0 0 0-.43.57 14 14 0 0 0-.91 13.73c8.87 18.16 27.17 36.32 45.53 45.19a14 14 0 0 0 13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92 1.92 0 0 1 1.6-.1l47.25 21.17a2 2 0 0 1 1.21 2A42.24 42.24 0 0 1 176 210ZM154 96V56a6 6 0 0 1 12 0v25.51l37.76-37.75a6 6 0 0 1 8.48 8.48L174.48 90H200a6 6 0 0 1 0 12h-40a6 6 0 0 1-6-6Z" />
  </Svg>
);
const Memo = memo(SvgPhoneIncomingLight);
export default Memo;
