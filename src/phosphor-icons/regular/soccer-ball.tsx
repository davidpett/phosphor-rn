import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoccerBall = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm76.52 147.42H170.9l-9.26-12.76 12.63-36.78 15-4.89 26.24 20.13a87.38 87.38 0 0 1-10.99 34.3Zm-164-34.3L66.71 117l15 4.89 12.63 36.78-9.24 12.75H51.48a87.38 87.38 0 0 1-11.01-34.3Zm10-50.64 5.51 18.6-15.32 11.69a87.33 87.33 0 0 1 9.72-30.29ZM109 152l-11.46-33.35L128 97.71l30.46 20.94L147 152Zm91.07-46.92 5.51-18.6a87.33 87.33 0 0 1 9.72 30.29Zm-6.2-35.38-9.51 32.08-15.07 4.89L136 83.79V68.21l29.09-20a88.58 88.58 0 0 1 28.77 21.49Zm-47.8-27.83L128 54.29l-18.07-12.42a88.24 88.24 0 0 1 36.14 0Zm-55.16 6.34 29.09 20v15.58l-33.28 22.88-15.07-4.89-9.51-32.08a88.58 88.58 0 0 1 28.77-21.49ZM63.15 187.42h20.37l7.17 20.27a88.4 88.4 0 0 1-27.54-20.27ZM110 214.13l-11.88-33.42 9.23-12.71h41.3l9.23 12.71-11.83 33.42a88 88 0 0 1-36.1 0Zm55.36-6.44 7.17-20.27h20.37a88.4 88.4 0 0 1-27.59 20.27Z" />
  </Svg>
);
const Memo = memo(SvgSoccerBall);
export default Memo;
