import React from 'react';

var myStyle = {
				fontsize:100,
				color:'#f00'
			};

var arr = [
    <h1 style={myStyle}>菜鸟教程</h1>,
    <h2>学的不仅是技术，更是梦想！</h2>
]

//组件
// var HelloMessage = React.createClass({
//   render: function() {
//     return  <div>
// 				<div>{arr}</div>
// 			    <p data-myattribute = "somevalue">这是一个很不错的 JavaScript 库!{this.props.name}</p>
//             </div>;
//   }
// });

// //复合组件
var WebSite = React.createClass({
	render: function(){
		return (
           <div>
             <Name name={this.props.name} />
             <Link site={this.props.site} />
           </div>
		);
	},
    getDefaultProps: function(){
        return {name: '菜鸟教程1'}
    }
})

var Name = React.createClass({
	render: function(){
		return (
		   <h1 onClick={this.titleClick}>{this.props.name}</h1>
		)
	},
    titleClick: function(){
        //this.setState({liked: !this.state.liked});
        this.setState({name: "嘻嘻"});
        //console.log(this.state.liked);
    },
    getDefaultProps: function(){
        return {name: '菜鸟教程1'}
    }
})

var Link = React.createClass({
	render: function(){
		return(
		  <a href={this.props.site} >
		      {this.props.site}
		  </a>
		)
	}
})


class App extends React.Component{
	render() {
		return (
			<WebSite site='http://www.runoob.com' />
		);
	}
}
// var LikeButton = React.createClass({
// 	getInitialState: function(){
// 		return {liked: false};
// 	},
//     btnClick: function(event){
//         this.setState({liked: !this.state.liked});
//     },
//     render: function(){
//     	var text = this.state.liked ? '喜欢' : '不喜欢';
//     	return (
//     	  <p onClick={this.btnClick}>
//     	      你<em>{text}</em>我。<button>点我切换状态</button>
//     	  </p> 
//     	)
//     }
// })


// class App extends React.Component{
// 	render() {
// 		return (
// 			<LikeButton />
// 		);
// 	}
// }

// var HelloMessage = React.createClass({
//     render: function(){
//         return <h1>Hello {this.props.name}</h1>;
//     }
// })


// class App extends React.Component{
//     render(){
//         return (
//             <HelloMessage name="Runoob" />
//         );
//     }
// }
export default App;