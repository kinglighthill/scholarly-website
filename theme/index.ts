import { extendTheme } from '@chakra-ui/react';
import colors from './colors';
import button from './components/button';
import typography from './typography';

const overrides = {
  colors,
  ...typography,
  components: {
    Button: button
  }
}

const theme = extendTheme(overrides);

export default theme;