import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVueLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m85.65 154-20 56a6 6 0 0 1-11.3 0l-20-56a6 6 0 1 1 11.3-4L60 190.16 74.35 150a6 6 0 0 1 11.3 4ZM208 158a6 6 0 0 0 0-12h-32a6 6 0 0 0-6 6v56a6 6 0 0 0 6 6h32a6 6 0 0 0 0-12h-26v-16h18a6 6 0 0 0 0-12h-18v-16Zm-64-12a6 6 0 0 0-6 6v38a12 12 0 0 1-24 0v-38a6 6 0 0 0-12 0v38a24 24 0 0 0 48 0v-38a6 6 0 0 0-6-6Zm70-58v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88Zm-20.48-6L158 46.48V82Z" />
  </Svg>
);
const Memo = memo(SvgFileVueLight);
export default Memo;
