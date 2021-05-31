# Fragments

- to avoid div soup, use fragments
- a fragment is a empty component that returns `props.children`
- `<React.Fragment>` will always work, however projects can be setup to use `<>` ... `</>`
- fragment make the code cleaner by rendering less unnecessary components like divs

# Portals

- ports components to elements outside `#app` div
- use `ReactDOM.createPortal(COMPONENT, document.getElementById(THE-ELEMENT-IT-RENDERS-TO))`

# Ref

- used to return dom element
- should be used to read data
- don't manipulate dom with refs
- kind of like query selector
- using refs to view data in a input would be defined at a uncontrolled component
- controlled component are when you use reacts state to view/manipu
