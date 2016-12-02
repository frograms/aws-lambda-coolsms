# aws-lambda-coolsms

## Required Environment variables
- COOL_SECRET 
- COOL_KEY
- SERVER_MESSAGE : 보낼 메시지
- SEND_FROM : 보낼 사람 전화 번호, 인증이 되어 있어야 함
- SEND_TO : 받을 사람 전화번호, 환경변수에 comma(,) 사용이 안되어서 구분자는 (|)

## Deploy
zip -r aws-lambda-alert.zip *
Upload. save and test
