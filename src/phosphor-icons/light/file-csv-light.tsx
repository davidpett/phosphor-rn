import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileCsvLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M46 180c0 12.13 8.07 22 18 22a16.24 16.24 0 0 0 11.67-5.28 6 6 0 0 1 8.66 8.3A28.06 28.06 0 0 1 64 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a28.06 28.06 0 0 1 20.33 9 6 6 0 0 1-8.66 8.3A16.23 16.23 0 0 0 64 158c-9.93 0-18 9.86-18 22Zm81.05-6.77c-10.86-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.66-1.82 21.45-.84a6 6 0 0 0 3.06-11.6c-2-.53-20.1-5-31.21 2.48a18.61 18.61 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94 12.12 3.5 14.78 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.25 11.52 59.41 59.41 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.78-22.83Zm83-26.88a6 6 0 0 0-7.67 3.63L188 190.15 173.65 150a6 6 0 1 0-11.3 4l20 56a6 6 0 0 0 11.3 0l20-56a6 6 0 0 0-3.65-7.66ZM214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88Zm-20.49-6L158 46.48V82Z" />
  </Svg>
);
const Memo = memo(SvgFileCsvLight);
export default Memo;
