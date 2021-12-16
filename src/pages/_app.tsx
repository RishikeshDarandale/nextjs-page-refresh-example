import type { AppProps } from 'next/app'
import { Theme, ThemeProvider } from 'theme-ui'
import { NextComponentType } from 'next';
import { FunctionComponent } from 'react';
import { bootstrap } from '@theme-ui/presets';

export type MyComponentType = NextComponentType & {
  useLayout: FunctionComponent;
  useTheme?: Theme;
};

function MyApp({ Component, pageProps }: AppProps) {
  const themeToUse = (Component as MyComponentType).useTheme || bootstrap;

  return (
    <ThemeProvider theme={themeToUse}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
