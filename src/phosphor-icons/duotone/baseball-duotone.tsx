import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBaseballDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M60.66 59.58A95.74 95.74 0 0 1 89.33 128a95.74 95.74 0 0 1-28.67 68.42 96 96 0 0 1 0-136.84Zm134.68 0a96 96 0 0 0 0 136.84 96 96 0 0 0 0-136.84Z"
      opacity={0.2}
    />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM72.09 195.91c.82-1 1.64-1.93 2.42-2.91A8 8 0 1 0 62 183l-1.34 1.62a87.82 87.82 0 0 1 0-113.24L62 73a8 8 0 1 0 12.51-10c-.78-1-1.6-2-2.42-2.91a87.84 87.84 0 0 1 111.82 0c-.82 1-1.64 1.92-2.42 2.91A8 8 0 1 0 194 73l1.34-1.62a87.82 87.82 0 0 1 0 113.24L194 183a8 8 0 1 0-12.48 10c.78 1 1.6 1.95 2.42 2.91a87.84 87.84 0 0 1-111.82 0Zm23.8-50.59a104.5 104.5 0 0 1-4.48 17.35 8 8 0 0 1-15.09-5.34 87.1 87.1 0 0 0 3.79-14.65 8 8 0 1 1 15.78 2.64Zm0-34.64a8 8 0 0 1-6.57 9.21A8.52 8.52 0 0 1 88 120a8 8 0 0 1-7.88-6.68 87.1 87.1 0 0 0-3.79-14.65 8 8 0 0 1 15.09-5.34 104.5 104.5 0 0 1 4.47 17.35Zm78.91 56.86a8 8 0 0 1-10.21-4.87 104.5 104.5 0 0 1-4.48-17.35 8 8 0 1 1 15.78-2.64 87.1 87.1 0 0 0 3.79 14.65 8 8 0 0 1-4.88 10.21Zm-14.69-56.86a104.5 104.5 0 0 1 4.48-17.35 8 8 0 0 1 15.09 5.34 87.1 87.1 0 0 0-3.79 14.65A8 8 0 0 1 168 120a8.52 8.52 0 0 1-1.33-.11 8 8 0 0 1-6.56-9.21Z" />
  </Svg>
);
const Memo = memo(SvgBaseballDuotone);
export default Memo;
