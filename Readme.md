1. (a) getElementById is select a single element by its own id , after that its return the element object directly , if they don't found any element "returns null".
   (b) getElementsByClassName is selects all elements that share a given class name and its returnr a live HTMLCollection.
   (c) querySelector is selects the first element that matches a CSS selector , like ( class, id, tag etc).
   Its also returns a single element.

2. if you **create and insert a new element into the DOM** firstly create element, then set content or attributes after that find parent. At last insert that content or attributes.

3. **Event Bubbling** is event starts at the target element, then moves upward to its parent, grandparent, up to document.
   It works child handler runs first, then parent, after that higher ancestors.

4. **Event Delegation** is a technique where you attach one event listener to a parent element instead of adding listeners to multiple child elements.
   It is very useful like(better performance, especially with many elements and also works even if new children are added later.)

5. (a) **preventDefault()** works to stop the browser’s default action for an event. It does not stop event bubbling.
   (b) **stopPropagation()** works to stop the event from bubbling up the DOM tree. Its default browser action still occurs.
