const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users/signup:
 *   post:
 *     summary: 사용자가 회원 정보를 입력하여 가입 처리
 *     requestBody:
 *       required: true  # The request body is required
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - userid
 *               - email
 *               - name
 *               - phone
 *     responses:
 *       200:
 *         description: 회원가입이 완료되었습니다.
 * /users/login:
 *   post:
 *     summary: 아이디와 비밀번호로 로그인 요청 처리
 *     requestBody:
 *       required: true  # The request body is required
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - userid
 *               - password
 *     responses:
 *       201:
 *         description: 로그인 성공
 * /users/{userid}:
 *   put:
 *     summary: 이메일, 이름, 전화번호 등을 수정
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true  # The request body is required
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *             required:
 *               - email
 *               - name
 *               - phone
 *     responses:
 *       200:
 *         description: 사용자 정보 수정 완료
 *   delete:
 *     summary: 회원 탈퇴 처리 (단순히 아이디로 탈퇴 처리)
 *     parameters:
 *       - in: path
 *         name: userid
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 회원 탈퇴 완료
 */
router.post("/signup", (req, res) => {
  const { userid, email, name, phone } = req.body;
  res
    .status(200)
    .send(`POST: /signup 회원정보: ${userid} ${email} ${name} ${phone}`);
});

router.post("/login", (req, res) => {
  const { userid, password } = req.body;
  res.status(201).send(`POST: /login 로그인: ${userid} ${password}`);
});

router.put("/user/:userid", (req, res) => {
  const { email, name, phone } = req.body;
  const { userid } = req.params;
  res.status(200).send(`${userid} 정보 수정: ${email} ${name} ${phone}`);
});

router.delete("/user/:userid", (req, res) => {
  const { userid } = req.params;
  res.status(200).send(`${userid} 회원 탈퇴 완료`);
});

module.exports = router;
