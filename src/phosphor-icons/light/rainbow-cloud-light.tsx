import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRainbowCloudLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 114a46.18 46.18 0 0 0-43.35 30.59 30 30 0 0 0-4.65-.37c-16.54 0-30 13.86-30 30.89S135.46 206 152 206h48a46 46 0 0 0 0-92Zm0 80h-48c-9.93 0-18-8.47-18-18.89s8.07-18.89 18-18.89a17.12 17.12 0 0 1 6.53 1.28 6 6 0 0 0 8.16-4.35A34 34 0 1 1 200 194ZM22 160v16a6 6 0 0 1-12 0v-16a102 102 0 0 1 173.11-73.13 6 6 0 1 1-8.37 8.61A90 90 0 0 0 22 160Zm90-58a58.07 58.07 0 0 0-58 58v16a6 6 0 0 1-12 0v-16a70 70 0 0 1 111.42-56.43 6 6 0 1 1-7.11 9.66A57.5 57.5 0 0 0 112 102Zm6 32.7a26.59 26.59 0 0 0-6-.7 26 26 0 0 0-26 26v16a6 6 0 0 1-12 0v-16a38 38 0 0 1 46.81-37 6 6 0 1 1-2.81 11.7Z" />
  </Svg>
);
const Memo = memo(SvgRainbowCloudLight);
export default Memo;
