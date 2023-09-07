import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWineDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M182.48 154.5a79.77 79.77 0 0 1-109 0A55.86 55.86 0 0 1 58.3 97.93l1.57-5.31C72.49 87.21 95.2 83.4 128 100c35.86 18.16 59.67 11.89 71.42 5.84a55.72 55.72 0 0 1-16.94 48.66Z"
      opacity={0.2}
    />
    <Path d="m205.33 95.67-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74L50.67 95.67a63.46 63.46 0 0 0 17.42 64.67A87.41 87.41 0 0 0 120 183.63V224H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.39 87.39 0 0 0 51.91-23.29 63.48 63.48 0 0 0 17.42-64.67ZM86.09 32h83.82L190 100.19c.09.3.17.6.25.9-21.42 7.68-45.54-1.6-58.63-8.23-25.19-12.75-45.19-14.37-59.94-11.93ZM177 148.65a71.69 71.69 0 0 1-98 0 47.55 47.55 0 0 1-13-48.46l.45-1.52c12-4.06 31.07-5.14 57.93 8.47 11.15 5.65 29.16 12.85 48.43 12.85a68.64 68.64 0 0 0 19.05-2.6A47.2 47.2 0 0 1 177 148.65Z" />
  </Svg>
);
const Memo = memo(SvgWineDuotone);
export default Memo;
