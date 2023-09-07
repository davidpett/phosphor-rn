import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCursorClickLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168.23 135.75a2 2 0 0 1-.55-1.79 1.92 1.92 0 0 1 1.17-1.46l44.76-19.5a14 14 0 0 0-1.23-26L52.3 34.7a14 14 0 0 0-17.6 17.6L87 212.38A13.85 13.85 0 0 0 99.58 222h.68a13.85 13.85 0 0 0 12.74-8.39l19.46-44.76a1.92 1.92 0 0 1 1.46-1.17 2 2 0 0 1 1.79.55l49.66 49.67a14 14 0 0 0 19.8 0l12.69-12.69a14 14 0 0 0 0-19.8Zm41.18 61-12.68 12.68a2 2 0 0 1-2.83 0l-49.67-49.66a14 14 0 0 0-22.74 4.31L102 208.82a1.81 1.81 0 0 1-1.88 1.18 1.84 1.84 0 0 1-1.77-1.35L46.11 48.58A2 2 0 0 1 47.93 46a2.33 2.33 0 0 1 .65.11l160.07 52.27a1.84 1.84 0 0 1 1.35 1.77 1.82 1.82 0 0 1-1.18 1.88l-44.76 19.46a14 14 0 0 0-4.31 22.74l49.66 49.67a2 2 0 0 1 0 2.83ZM90 24v-8a6 6 0 0 1 12 0v8a6 6 0 0 1-12 0ZM10 96a6 6 0 0 1 6-6h8a6 6 0 0 1 0 12h-8a6 6 0 0 1-6-6Zm112.63-66.68 8-16a6 6 0 0 1 10.74 5.37l-8 16a6 6 0 1 1-10.74-5.36Zm-85.26 96a6 6 0 0 1-2.69 8.05l-16 8a6 6 0 0 1-5.36-10.74l16-8a6 6 0 0 1 8.05 2.69Z" />
  </Svg>
);
const Memo = memo(SvgCursorClickLight);
export default Memo;
