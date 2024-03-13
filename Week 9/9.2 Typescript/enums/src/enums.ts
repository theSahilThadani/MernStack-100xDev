enum Key{
    Up,
    Down,
    Right,
    Left
}
function Keypressed(key:Key){
    console.log(key)
}
Keypressed(Key.Right) //use enums as input and it will suggest defulat or set input like Key.up

//below is common usecase for express backen₫ using enum Ts

enum rescode{
    Notfound = 404,
    Sucsess=200,
    Error=500,
}
//below is Route to use enums in easy way, we can change enum values and it will change in all routes dont need to go through all codes
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })