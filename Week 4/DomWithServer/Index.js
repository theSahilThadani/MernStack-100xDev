const express = require("express")
const app = express();
const cors = require('cors')

app.use(cors());

app.get('/sum',(req,res)=>{
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const sum = a+b;
    res.send(sum.toString());
})
app.get('/CIC', (req, res) => {
    const amount = parseFloat(req.query.amount);
    const interest = parseFloat(req.query.interest);
    const years = parseFloat(req.query.years);
    
    const TotalInterest = (amount * interest * years) / 100;
    const totalAmount = amount + TotalInterest;

    // Prepare the result as an object
    const result = {
        totalAmount: totalAmount,
        interestAmount: TotalInterest
    };

    // Send the result as JSON
    res.json(result);
});


app.listen(8000)