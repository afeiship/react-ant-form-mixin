import './dev.scss';
import ReactAntFormMixin from './main';

/*===example start===*/

// install: npm install afeiship/react-ant-form-mixin --save
// import : import ReactAntFormMixin from 'react-ant-form-mixin'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-ant-form-mixin">
        <ReactAntFormMixin ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
