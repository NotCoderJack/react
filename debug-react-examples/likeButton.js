'use strict'

const e = React.createElement;
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//   handleClick = () => {
//     this.setState({liked: true });
//     console.log(this.state);
//   }
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }
//     return e(
//       'button',
//       { onClick: this.handleClick },
//       'Like'
//     );
//   }
// }

function LikeButton() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('first effect');
  }, [count])

  if (count > 0) {
    React.useEffect(() => {
      console.log('effect > 0');
    }, [count])
  } else {
    React.useEffect(() => {
      console.log('effect <= 0');
    }, [count])
  }

  const handleClick = () => {
    setCount(1);
  }
  return e(
    'button',
    { onClick: handleClick },
    'Like'
  );
}
const root = document.querySelector('#root')
ReactDOM.render(e(LikeButton), root)
