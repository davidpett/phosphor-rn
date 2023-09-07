import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSoccerBallLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm77.67 147.42h-35.78L159.41 159l13.29-38.72 17-5.51 27.94 21.43a89.38 89.38 0 0 1-11.97 37.22Zm-119.56 0H50.33a89.38 89.38 0 0 1-11.95-37.22l27.94-21.43 17 5.51L96.59 159ZM51 81.42l7.24 24.41-20 15.34A89.47 89.47 0 0 1 51 81.42ZM107.56 154l-12.41-36.14L128 95.28l32.85 22.58L148.44 154Zm90.19-48.17L205 81.42a89.47 89.47 0 0 1 12.75 39.75Zm-1.66-36.62L186 103.35l-17 5.53-35-24V67.16l30.9-21.24a90.3 90.3 0 0 1 31.19 23.29ZM150.92 41 128 56.72 105.08 41a90.22 90.22 0 0 1 45.84 0Zm-59.81 4.91L122 67.16v17.68l-35 24-17-5.53-10.09-34.1a90.4 90.4 0 0 1 31.2-23.3ZM58.75 185.42h26.18l9.19 26a90.37 90.37 0 0 1-35.37-26Zm49.68 30.43-12.55-35.46L106.34 166h43.32l10.46 14.39-12.55 35.46a90.14 90.14 0 0 1-39.14 0Zm53.45-4.48 9.19-26h26.18a90.37 90.37 0 0 1-35.37 26Z" />
  </Svg>
);
const Memo = memo(SvgSoccerBallLight);
export default Memo;
