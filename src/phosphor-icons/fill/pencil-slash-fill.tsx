import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilSlashFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M53.92 34.62a8 8 0 1 0-11.84 10.76l48.2 53L36.68 152A15.89 15.89 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l50.4-50.39 47.69 52.46a8 8 0 1 0 11.84-10.76Zm47.14 75.64L117 127.74l-49 48.95L51.31 160ZM48 208v-28.69L76.69 208Zm48-3.31L79.32 188l48.41-48.41 15.89 17.48ZM227.32 96 183 140.34A8 8 0 0 1 171.67 129l14.68-14.68-16.69-16.66L156.31 111A8 8 0 0 1 145 99.69l13.35-13.35-16.69-16.68-12 12a8 8 0 0 1-11.32-11.31L160 28.69a16 16 0 0 1 22.63 0l44.69 44.68a16 16 0 0 1 0 22.63Z" />
  </Svg>
);
const Memo = memo(SvgPencilSlashFill);
export default Memo;
