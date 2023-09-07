import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoneDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M225.09 102.44a28 28 0 0 1-35.92 5.3 8 8 0 0 0-10 1.07l-70.38 70.38a8 8 0 0 0-1.07 10A28 28 0 1 1 56.3 199.7a28 28 0 1 1 10.51-51.42 8 8 0 0 0 10-1.07l70.38-70.38a8 8 0 0 0 1.07-10 28 28 0 1 1 51.42-10.51 28 28 0 0 1 25.41 46.12Z"
      opacity={0.2}
    />
    <Path d="M231.67 60.89a35.82 35.82 0 0 0-23.82-12.74 36 36 0 1 0-66.37 22.92.25.25 0 0 1 0 .08l-70.31 70.36h-.1a36 36 0 1 0-22.92 66.37 36 36 0 1 0 66.37-22.92.54.54 0 0 1 0-.08l70.35-70.36h.1a36 36 0 0 0 46.74-53.63ZM219.1 97.16a20 20 0 0 1-25.67 3.8 16 16 0 0 0-19.88 2.19l-70.4 70.4a16 16 0 0 0-2.15 19.88 20 20 0 1 1-36.75 7.5 8 8 0 0 0-7.91-9.24 8.5 8.5 0 0 0-1.23.1A20 20 0 1 1 62.57 155a16 16 0 0 0 19.88-2.19l70.4-70.4A16 16 0 0 0 155 62.57a20 20 0 1 1 36.75-7.5 8 8 0 0 0 9.14 9.14 20 20 0 0 1 18.17 33Z" />
  </Svg>
);
const Memo = memo(SvgBoneDuotone);
export default Memo;
