import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import ChatRoom from './components/ChatRoom';
import Join from './components/Join';

/**
 * The function returns a Router component with two Route components, one for the Join page and one for
 * the ChatRoom page with parameters for name and room.
 * @returns The `App` component is being returned, which contains a `Router` component with two `Route`
 * components. The first `Route` component renders the `Join` component when the path is exactly `/`,
 * and the second `Route` component renders the `ChatRoom` component when the path matches
 * `/chat/name=:name-room=:room`.
 */
function App() {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat/name=:name-room=:room" component={ChatRoom} />
    </Router>
  )
}

export default App;
