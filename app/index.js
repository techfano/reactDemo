var React = require('react');
var ReactDOM = require('react-dom');

routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
)

/*var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li key={friend.toString()}> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function(){
    var name = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {name} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);
*/
