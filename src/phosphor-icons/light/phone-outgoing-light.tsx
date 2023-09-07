import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneOutgoingLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M155.76 100.24a6 6 0 0 1 0-8.48L193.52 54H168a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6v40a6 6 0 0 1-12 0V62.48l-37.76 37.76a6 6 0 0 1-8.48 0Zm74.13 74.59A54.25 54.25 0 0 1 176 222C97.7 222 34 158.3 34 80a54.24 54.24 0 0 1 47.17-53.89 14 14 0 0 1 14.56 8.38l21.1 47.11a14 14 0 0 1-1.12 13.27 6.13 6.13 0 0 1-.42.58l-21.07 25a1.91 1.91 0 0 0 0 1.68c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a4.81 4.81 0 0 1 .56-.42 14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.58ZM218 173.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73 4.73 4.73 0 0 1 .43-.57l21.06-25.06a2 2 0 0 0 0-1.67L84.74 39.31A2 2 0 0 0 82.9 38h-.23A42.23 42.23 0 0 0 46 80c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68Z" />
  </Svg>
);
const Memo = memo(SvgPhoneOutgoingLight);
export default Memo;
