
This code is based on the tutorial available below:
https://www.youtube.com/watch?v=wwl6iH5D0LU


/////////////////////////////////////////////////////////
///////////////    SOME INSTRUCTIONS   //////////////////
/////////////////////////////////////////////////////////

//npx create-react-app

//install express nodemon mongoose dotenv* cors*
//server.js
	app.listen(###, ()=> ...)
//routes/routes.js
	const router = express.Router()
	router.post('/aa',(req, res)=>{res.send('bb')})
	module.exports = router
//models/SignUpModels.js
	const mongoose = require('mongoose');
	const name = new mongoose.Schema({ props..})
//require model into routes.js
//add instance of schema inside route Post 
	(prop: req.body.prop)
	.save() into DB
	.then(data => res.json(data))
//Connect to the database
//import routes into server.js
	//app.use(express.json())
	//app.use(cors())
	//define the route path app.use('/app', routeVar)
	
View/ extensions / rest-client ==> test integration with database

///////////////////////////////////////////////////////
/////////////////// FRONT END /////////////////////////

//intall bootstrap
//create App class component
	//define class constructor and state ==> constructor(){super().this.state={ props...}}
	//render(){return(<form>
		<input
		  type/placeholder/onChange={this.changePropName}/value={this.state.prop}
 		/>
		***
//Define the state update functions
	changePropName(evenet){this.setState({fullName:event.target.value})}
	***
//bind the methods to a constructor method
	inside the constructur and after super() add this=>
		this.changeFullName = this.changeFullName.bind(this);

//install axios and import axios into App component.
	it allows integration between front and backend

//add onSubmit event to the <form>, 
	<form onSubmit={this.onSubmit.bind(this)}>

//instantiate onSubmit as class public method
	onSubmit(event){event.preventDefault()
		 const registered = {
            		fullName:this.state.fullName,
            		username:this.state.username,
            		email:this.state.email,
            		password:this.state.password
        		}
			axios.post('serverURL', registered)
		}
//axios sends *const registered* to the backend

//finally, return the empty form(empty state)
	this.setState({
            fullName:'',
            username:'',
            email:'',
            password:''
        })