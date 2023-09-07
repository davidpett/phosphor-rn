import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPlugsConnectedBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240.49 15.51a12 12 0 0 0-17 0l-49.55 49.58-2.54-2.55a36.05 36.05 0 0 0-50.91 0L100 83l-3.51-3.52a12 12 0 0 0-17 17L83 100l-20.46 20.49a36 36 0 0 0 0 50.91l2.55 2.54-49.58 49.57a12 12 0 0 0 17 17l49.57-49.58 2.54 2.55a36.06 36.06 0 0 0 50.91 0L156 173l3.51 3.52a12 12 0 0 0 17-17L173 156l20.49-20.49a36 36 0 0 0 0-50.91l-2.55-2.54 49.58-49.57a12 12 0 0 0-.03-16.98Zm-121.95 161a12 12 0 0 1-17 0l-22.03-22.08a12 12 0 0 1 0-17L100 117l39 39Zm58-57.95L156 139l-39-39 20.49-20.49a12 12 0 0 1 17 0l22.06 22.06a12 12 0 0 1 0 17ZM20.62 92.21a12 12 0 0 1 15.18-7.59l12 4a12 12 0 1 1-7.59 22.76l-12-4a12 12 0 0 1-7.59-15.17Zm64-56.41a12 12 0 1 1 22.76-7.59l4 12a12 12 0 0 1-22.76 7.59Zm150.76 128a12 12 0 0 1-15.18 7.58l-12-4a12 12 0 0 1 7.59-22.76l12 4a12 12 0 0 1 7.59 15.18Zm-64 56.41a12 12 0 1 1-22.76 7.58l-4-12a12 12 0 1 1 22.76-7.58Z" />
  </Svg>
);
const Memo = memo(SvgPlugsConnectedBold);
export default Memo;
