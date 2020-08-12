## Lifecycle methods

1. constructor - in the beggining the constructor is called where we get the props. Dont forget to call super(props) method in the constructor if receiving any props. In the constructor side effects or any logic are not a good practice, only some set ups

2. getDerivedStateFromProps(props, state) - dont do side effects here

3. render() - the third on the line is the render method. Usually here we prepare the data to be rendered.

4. render child components - (this is not life cycle method, but is a step related to parent-child life cycle) all children components with their life cycle hooks are running here

5. componentDidMount() - good to use side effects.

6. shouldComponentUpdate(nextProps, nextState) - used for performance optimizations, because with it we can cancel updating on some of the components

7. componentDidUpdate() -
