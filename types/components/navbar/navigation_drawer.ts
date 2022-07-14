import { RefObject } from "react";

export interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  hamburgerRef: RefObject<SVGSVGElement>;
}