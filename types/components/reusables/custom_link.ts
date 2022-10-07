import { LinkProps as ChakraLinkProps, ResponsiveValue } from "@chakra-ui/react";

export interface CustomLinkProps extends ChakraLinkProps {
  children: React.ReactNode;
  href: string;
  prefetch?: boolean;
  type?: 'text' | 'button';
  variant?: 'solid' | 'outline';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconSpacing?: ResponsiveValue<number | string>;
}

export type Variants = {
  [variant in 'solid' | 'outline'] : object;
};