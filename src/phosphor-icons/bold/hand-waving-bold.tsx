import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandWavingBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M81.61 247.27a12 12 0 0 1-16.8 2.41A131.23 131.23 0 0 1 29.67 210a12 12 0 1 1 20.79-12 107.45 107.45 0 0 0 28.73 32.48 12 12 0 0 1 2.42 16.79ZM223.66 98a92 92 0 0 1-159.35 92l-38-65.82a32 32 0 0 1 19.15-46.85l-.46-.87a32 32 0 0 1 36-46.91A31.7 31.7 0 0 1 90.62 34 32 32 0 0 1 143 38.31L155.52 60a32 32 0 0 1 50.14 6.84Zm-20.78 12-18-31.18a8 8 0 0 0-13.87 8l10 17.31a12 12 0 0 1-4.39 16.39 28 28 0 0 0-10.25 38.25 12 12 0 0 1-20.79 12 52.09 52.09 0 0 1 9.35-63.77l-32.69-56.69a8 8 0 0 0-13.86 8l26 45a12 12 0 0 1-20.79 12l-34-58.89a8 8 0 0 0-10.92-2.93 8 8 0 0 0-2.93 10.93l38 65.81a12 12 0 1 1-20.79 12l-22-38.1a8 8 0 1 0-13.85 8l38 65.87a68 68 0 0 0 117.78-68Zm37.42-63.19a71.5 71.5 0 0 0-43.72-33.55 12 12 0 0 0-6.21 23.19 47.65 47.65 0 0 1 29.15 22.36 12 12 0 1 0 20.78-12Z" />
  </Svg>
);
const Memo = memo(SvgHandWavingBold);
export default Memo;
