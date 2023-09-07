import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLeafLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.45 40.19a6 6 0 0 0-5.64-5.64C140.43 30.11 80.14 52.71 54.53 95c-17.44 28.79-16.76 62.8 1.79 96.2l-20.56 20.56a6 6 0 1 0 8.48 8.48l20.56-20.56c17.27 9.59 34.7 14.41 51.49 14.41A85.38 85.38 0 0 0 161 201.47c42.29-25.61 64.88-85.9 60.45-161.28Zm-66.66 151c-24.08 14.58-52.64 14.37-81.13-.39l90.59-90.59a6 6 0 0 0-8.48-8.48l-90.59 90.61c-14.76-28.49-15-57-.39-81.13 22.68-37.43 76.63-57.8 145-54.95 2.8 68.32-17.57 122.28-55 144.95Z" />
  </Svg>
);
const Memo = memo(SvgLeafLight);
export default Memo;
