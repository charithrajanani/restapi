const express = require('express'); //Import express
const  Joi = require('joi'); //Import Joi
const  app = express(); //Create Express application on the top variable
app.use(express.json()); //used the jason file

const countries = [
    {origin : 'Sri lanka', destination : 'Canada' ,airline : 'Sri lankan Air line'},
    {origin : 'Sri lanka', destination : 'India',airline : 'Emirates'},
    {origin : 'Sri lanka', destination : 'America',airline : 'Cathy Pacific'},
    {origin : 'Sri lanka', destination : 'Russia',airline : 'Emirates'},
    {origin : 'Sri lanka', destination : 'Saudi Arabia',airline : 'Air India'},
    {origin : 'Sri lanka', destination : 'Nepal',airline : 'Air india'},
    {origin : 'Sri lanka', destination : 'Egypt',airline : 'SEmirates'},
    {origin : 'Sri lanka', destination : 'England',airline : 'Sri lankan Air line'},
    {origin : 'Sri lanka', destination : 'South Africa',airline : 'Emirates'}
]

const dates = [
    { departure : '03/04/2021', arrival : '09/04/2021'}

]

const pax = [
    { adults : '3', children : 3, infants : 1}
]
// Read Request Handlers
//Display the message when the URL consist of '/'
app.get('/'), (req,res) => {
    res.send('Welcome to Flight  REST API');
}

//Display the list of countries when the URL consists of api countries
app.get('/api/countries', (req, res)=> {
    res.send(countries);
});

//Display the information of specific Air line when you enter destination.
app.get('/api/countries/:air line', (req, res) => {

   const airline = countries.find(c => c.destination === String(req.params.destination));
   //if there is no valid destination,then display error message
    if (!airline) {
        res.status(404).send('<h2 style= "font-family: Malgun Gothic; color: #8b0000;">Ooops..Cant find what you looking for!</h2>h2>')
        res.send(airline);
    }
});
//validate information in origin and destination
function validatecountries(countries) {
    const schema = {
        origin: Joi.string().min(3).required() ,
        destination: Joi.string().min(3).required(),
        airline : Joi.string().min(3).required()

    };
    return Joi.validate(countries,schema);

    //validate information
    function validateDate(date) {
        const schema = {
            departure: Joi.date().min(8).required()

        };
        return Joi.validate(date,schema);

//validate information
function validatePax(pax) {
    const schema = {
        adults: Joi.string().min(1).required(),
        children : Joi.string().min(1).required(),
        infants : Joi.string().min(1).required()
    };
    return Joi.validate(pax,schema);
}
//create request handler
//create new countries
        app.post('/api/countries',(req,res)=> {
            countries.push();
            res.send();

        }
    });

    }


//port environment variable
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port $(port)..'));