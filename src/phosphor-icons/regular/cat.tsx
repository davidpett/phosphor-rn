import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCat = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 140a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm76-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm60-80v88c0 52.93-46.65 96-104 96S24 188.93 24 136V48a16 16 0 0 1 27.31-11.31c.14.14.26.27.38.41L69 57a111.22 111.22 0 0 1 118.1 0l17.21-19.9c.12-.14.24-.27.38-.41A16 16 0 0 1 232 48Zm-16 0-21.56 24.8a8 8 0 0 1-10.81 1.2A88.86 88.86 0 0 0 168 64.75V88a8 8 0 1 1-16 0V59.05a97.43 97.43 0 0 0-16-2.72V88a8 8 0 1 1-16 0V56.33a97.43 97.43 0 0 0-16 2.72V88a8 8 0 1 1-16 0V64.75A88.86 88.86 0 0 0 72.37 74a8 8 0 0 1-10.81-1.17L40 48v88c0 41.66 35.21 76 80 79.67v-20.36l-13.66-13.66a8 8 0 0 1 11.32-11.31L128 180.68l10.34-10.34a8 8 0 0 1 11.32 11.31L136 195.31v20.36c44.79-3.69 80-38 80-79.67Z" />
  </Svg>
);
const Memo = memo(SvgCat);
export default Memo;
