const express = require('express')
const app = express() //saving express() to variable

//setup route
app.get('/', (req, res) => {
    console.log('here')
    //res.send('hi') //res.send는 많이 안쓰이고 테스트정도로
    //res.sendStatus(500) // 오류보고를 할수도 있다 
    //res.status(500).send('Oh yeah'); // 이렇게 위 두개를 묶어서 메세지를 넣을 수도
    //res.status(500).json({ message: "Error!!!!~~!~!"})
    //res.download("server.js") // 이렇게 다운로드도 시킬 수 있다
    res.render("")

})

//to actually run the server
app.listen(3000) //portnumber
 