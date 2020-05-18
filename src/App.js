import React, {Component} from 'react';
import Layout from "./hoc/Layout/Layout";
import Quiz from './containers/Quiz/Quiz'


// function App() {
//   return (
//     <Layout>
//       <Quiz/>
//     </Layout>
//   );
// }
class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    )
  }
}

export default App;
