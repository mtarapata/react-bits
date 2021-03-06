/**
 * Avoid passing new closures to subcomponents.
 *
 * Here’s why: every time the parent component renders, a new function is created and passed to the input.
 * If the input were a React component, this would automatically trigger it to re-render, regardless of whether its other props have actually changed.
 * Reconciliation is the most expensive part of React. Don’t make it harder than it needs to be! Plus, passing a class method is easier to read, debug, and change.
 */

class Example extends Component {
  render() {
    <input
      type="text"
      value={model.name}
      // onChange={(e) => { model.name = e.target.value }}
      // ^ Not this. Use the below:
      onChange={this.handleChange}
      placeholder="Your Name"/>
  }
}
