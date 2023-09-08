import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSealBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228.75 100.05c-3.52-3.67-7.15-7.46-8.34-10.33-1.06-2.56-1.14-7.83-1.21-12.47-.15-10-.34-22.44-9.18-31.27s-21.27-9-31.27-9.18c-4.64-.07-9.91-.15-12.47-1.21-2.87-1.19-6.66-4.82-10.33-8.34C148.87 20.46 140.05 12 128 12s-20.87 8.46-27.95 15.25c-3.67 3.52-7.46 7.15-10.33 8.34-2.56 1.06-7.83 1.14-12.47 1.21-10 .2-22.44.34-31.25 9.2s-9 21.25-9.2 31.25c-.07 4.64-.15 9.91-1.21 12.47-1.19 2.87-4.82 6.66-8.34 10.33C20.46 107.13 12 116 12 128s8.46 20.87 15.25 28c3.52 3.67 7.15 7.46 8.34 10.33 1.06 2.56 1.14 7.83 1.21 12.47.15 10 .34 22.44 9.18 31.27s21.27 9 31.27 9.18c4.64.07 9.91.15 12.47 1.21 2.87 1.19 6.66 4.82 10.33 8.34C107.13 235.54 116 244 128 244s20.87-8.46 27.95-15.25c3.67-3.52 7.46-7.15 10.33-8.34 2.56-1.06 7.83-1.14 12.47-1.21 10-.15 22.44-.34 31.27-9.18s9-21.27 9.18-31.27c.07-4.64.15-9.91 1.21-12.47 1.19-2.87 4.82-6.66 8.34-10.33 6.79-7.08 15.25-15.9 15.25-27.95s-8.46-20.87-15.25-27.95Zm-17.32 39.29c-4.82 5-10.28 10.72-13.2 17.76-2.81 6.8-2.92 14.16-3 21.29-.08 5.36-.19 12.71-2.15 14.66s-9.3 2.07-14.66 2.15c-7.13.11-14.49.22-21.29 3-7 2.91-12.74 8.37-17.76 13.19-3.59 3.45-8.97 8.61-11.37 8.61s-7.78-5.16-11.34-8.57c-5-4.82-10.72-10.28-17.76-13.2-6.8-2.81-14.16-2.92-21.29-3-5.36-.08-12.71-.19-14.66-2.15s-2.07-9.3-2.15-14.66c-.11-7.13-.22-14.49-3-21.29-2.92-7-8.38-12.73-13.2-17.76-3.44-3.59-8.6-8.97-8.6-11.37s5.16-7.78 8.57-11.34c4.82-5 10.28-10.72 13.2-17.76 2.81-6.8 2.92-14.16 3-21.29C60.88 72.25 61 64.9 63 63s9.3-2.07 14.66-2.15c7.13-.11 14.49-.22 21.29-3 7-2.91 12.74-8.37 17.76-13.19C120.22 41.16 125.6 36 128 36s7.78 5.16 11.34 8.57c5 4.82 10.72 10.28 17.76 13.2 6.8 2.81 14.16 2.92 21.29 3 5.36.08 12.71.19 14.66 2.15s2.07 9.3 2.15 14.66c.11 7.13.22 14.49 3 21.29 2.92 7 8.38 12.73 13.2 17.76 3.41 3.56 8.57 8.94 8.57 11.34s-5.13 7.81-8.54 11.37Z" />
  </Svg>
);
const Memo = memo(SvgSealBold);
export default Memo;
