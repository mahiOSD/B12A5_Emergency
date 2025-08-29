1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: selects one element by id

getElementsByClassName: selects all elements with a class

querySelector: selects first element matching CSS selector

querySelectorAll: selects all elements matching CSS selector

2.How do you create and insert a new element into the DOM?

 1.Create a new element using document.createElement().
 
 2.Set its attributes or content.
 
 3.Append it to an existing element using appendChild.

3.What is Event Bubbling and how does it work?

Event Bubbling means the event moves from the inner element to the outer element.

When you trigger an event on an element, it first happens on the inner element, then on its parent element and then on its parent’s parent, all the way up to the document.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation means attaching a single event listener to a parent element instead of multiple child elements.

It is Useful because:

  Reduces memory usage.
  
  Works for dynamically added elements.
  
5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault():Stops the browser’s default action for an event.

stopPropagation():Stops the event from bubbling up the DOM tree.
