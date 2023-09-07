import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneOutgoingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M157.17 98.83a4 4 0 0 1 0-5.66L198.34 52H168a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4v40a4 4 0 0 1-8 0V57.66l-41.17 41.17a4 4 0 0 1-5.66 0Zm70.74 75.75A52.25 52.25 0 0 1 176 220C98.8 220 36 157.2 36 80a52.25 52.25 0 0 1 45.42-51.91 12 12 0 0 1 12.48 7.19L115 82.42a12 12 0 0 1-1 11.36c-.09.13-.18.26-.28.38l-21.2 25.21a3.9 3.9 0 0 0-.18 3.69c7.84 16.05 24.65 32.73 40.89 40.57a3.9 3.9 0 0 0 3.7-.21l24.87-21.12a3.37 3.37 0 0 1 .38-.28 12 12 0 0 1 11.38-1.02l47.22 21.16a12 12 0 0 1 7.13 12.42Zm-10.35-5.12-47.21-21.16a3.93 3.93 0 0 0-3.57.27L142 169.69l-.37.28a12 12 0 0 1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27a12 12 0 0 1 .76-11.75c.09-.14.19-.26.29-.39l21.19-25.2a4 4 0 0 0 .23-3.6L86.57 38.49A4 4 0 0 0 82.9 36a3.87 3.87 0 0 0-.48 0A44.23 44.23 0 0 0 44 80c0 72.78 59.22 132 132 132a44.23 44.23 0 0 0 44-38.42 4 4 0 0 0-2.44-4.12Z" />
  </Svg>
);
const Memo = memo(SvgPhoneOutgoingThin);
export default Memo;
