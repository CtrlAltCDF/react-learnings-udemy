# Conditional & Dynamic Styles

- use logic/state to determine a style
- can either use inline styles with truantry operators or classes that get added through string manipulation

# Styled Components (elements)

- external package that allows you to scope styles to a component
- all .css files that get imported to a component are actually global
- tagged template literal ` const Button = styled.button``  ` <- this seems a bit terrible.
- however it's only for html elements and you can pass events a props
- styles components can be created in a create component they can also be passed as a component
- you can pass props to the created component, you can also access props from the styles and preform logic
- styles are made to be unique

# CSS Modules

- react apps that are created with the crete-react-app script have css modules supported by default
- imports like `import styles from Button.module.css`\
- styles are made to be unique
