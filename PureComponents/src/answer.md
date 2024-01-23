The pure component is working efficiently.

The pure component does not re-render if the props or states are same where as in the Simple Component it re-renders every time even if the props and states are same.

Pure Component implements a shallow comparison of props and state. It helps in optimizing the performance by preventing unnecessary renders if the props and state are the same.