var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

app.use(bodyParser.urlencoded({extended:true})).use(express.static("image",{masAge:60*60*1000}));

app.post("/json",(req,res)=>{
	console.log(req.body);
	console.log(req.body.test);
	var jsonObj = {
		what: 'hhaa',
		enha: "wahahah"
	}
	res.send(jsonObj);
});

app.listen(80);