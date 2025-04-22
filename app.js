const express = require("express"); // import 대신 require 사용
const fs = require("fs");

const app = express();
const box = {};

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile(__dirname + "/views/index.html", (err, data) => {
    if (err) {
      res.status(500);
      return res.send("파일 읽기 오류");
    }
    res.status(200).set({ "Content-Type": "text/html" });
    res.send(data);
  });
});
// http://127.0.0.1:3000/login?userid=Apple&userpw=1234
// 원래는 get 방법 쓰면 안 되긴 함
app.get("/login", (req, res, next) => {
  console.log("login 호출!(GET)");
  console.log(req.query);
  console.log("아이디 : ", req.query.userid);
  console.log("비밀번호 : ", req.query.userpw);
  const { userid, userpw } = req.query;
  box.userid = userid;
  box.userpw = userpw;
});
app.get("/result.html", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  const html = `
  <html>
    <head><title>결과</title></head>
    <body>
      <h1>로그인 결과</h1>
      <p>아이디: ${box.userid || "없음"}</p>
      <p>비밀번호: ${box.userpw || "없음"}</p>
    </body>
  </html>
`;
  res.status(200).send(html);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("서버 실행 중");
});
