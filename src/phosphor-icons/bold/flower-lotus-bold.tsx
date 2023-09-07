import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlowerLotusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M249.3 119.63a19.51 19.51 0 0 0-12-9.2 76 76 0 0 0-18.38-2.43 92.19 92.19 0 0 0-3-42 20.15 20.15 0 0 0-23.44-13.57A88.39 88.39 0 0 0 166.3 62.8 98 98 0 0 0 140 32a20.07 20.07 0 0 0-24 0 98 98 0 0 0-26.3 30.8 88.39 88.39 0 0 0-26.15-10.38A20.15 20.15 0 0 0 40.11 66a92.19 92.19 0 0 0-3 42 76 76 0 0 0-18.41 2.43 19.51 19.51 0 0 0-12 9.2 20 20 0 0 0-2 15.31c3.55 13.16 14.4 38.16 47.14 57.72C84.16 212 112.76 212 128.08 212s43.76 0 76.07-19.34c32.74-19.56 43.59-44.56 47.14-57.72a20 20 0 0 0-1.99-15.31ZM64.16 172.05c-22.29-13.32-31.35-29.13-35-39.35a57.54 57.54 0 0 1 14.54-.46 134 134 0 0 0 8.55 17.69 142.54 142.54 0 0 0 19.59 26.32c-2.54-1.25-5.1-2.65-7.68-4.2ZM79 147.27c-2.1-3-4.12-6-6-9.29-15.63-27.28-14.16-49.04-11-61.22a69 69 0 0 1 18.5 8.57 124.18 124.18 0 0 0-4.5 33.84 127.59 127.59 0 0 0 3 28.1Zm49 38c-9.72-8.07-28-28.28-28-66.13 0-37.42 18-57.7 28-66.08 10 8.38 28 28.66 28 66.08 0 37.86-18.28 58.09-28 66.16Zm49-38a127.59 127.59 0 0 0 3-28.1 124.18 124.18 0 0 0-4.5-33.84 69.08 69.08 0 0 1 18.5-8.58c3.13 12.19 4.6 34-11.06 61.23-1.84 3.25-3.86 6.34-5.94 9.29Zm14.86 24.78c-2.56 1.53-5.09 2.91-7.58 4.16a142.54 142.54 0 0 0 19.51-26.28 134 134 0 0 0 8.55-17.69 57.54 57.54 0 0 1 14.54.46c-3.69 10.22-12.75 26.03-35.04 39.35Z" />
  </Svg>
);
const Memo = memo(SvgFlowerLotusBold);
export default Memo;