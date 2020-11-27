const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'fababbdd51024602bf60f91019d0e684'
});

const handleApicall =(req,res)=>{
app.models
      .predict('d02b4508df58432fbb84e800597b8959',req.body.input)
      .then(data=>{
      	res.json(data);
      })
      .catch(err=>res.status(400).json('unable to work with api'))
}

const handleImage =(req,res,db)=>{
	const { id } = req.body;
	db('users')
	.where('id',id)
	.increment('entries',1)
	.returning('entries')
	.then(entries=>{
		res.json(entries[0])
	})
	.catch(err=>{res.status(404).json('unable to get entries')})
	}

module.exports = {
		handleImage: handleImage,
		handleApicall:handleApicall
	}	