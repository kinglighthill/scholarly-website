const button = {
  baseStyle: {
    fontWeight: 'medium',
    borderRadius: 4
  },
  variants: {
    // Override the color picker for the outline button variant
    outline: {
      color: 'brand.lime.500',
      borderColor: 'brand.lime.500',
    } ,
  },
  defaultProps: {
    colorScheme: 'brand.lime',
  },
}

export default button;