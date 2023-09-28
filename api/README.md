INSTRUCTIONS ON HOW TO USE MY AUTHENTICATION SYSTEM.

## Host URL
https://cdtjwt.onrender.com

Postman Documentation url: https://documenter.getpostman.com/view/21753101/2s9YJZ55H7

Using an API testing tool like postman or insomnia, carryout the following HTTP Requests with the respective enpoints.

1. Register User (POST):
   - URL: `host_url/api/register`
   - Method: POST
   - Body (JSON): `{ "username": "your_username", "password": "your_password" }`

2. Login User (POST):
   - URL: `host_url/api/login`
   - Method: POST
   - Body (JSON): `{ "username": "your_username", "password": "your_password" }`

3. Protected GET Endpoint:
   - URL: `host_url/api/protected/get`
   - Method: GET
   - Headers: `Authorization: Bearer YOUR_TOKEN`

4. Protected POST Endpoint:
   - URL: `host_url/api/protected/post`
   - Method: POST
   - Headers: `Authorization: Bearer YOUR_TOKEN`

Replace `"your_username"` and `"your_password"` with your actual username and password for registration and login. Replace `"YOUR_TOKEN"` in the headers of the protected endpoints with the token you receive after logging in.

TEST USAGE WITH DATA

1. Register User (POST):
   - URL: `https://cdtjwt.onrender.com/api/register`
   - Method: POST
   - Body (JSON): `{ "username": "jamiejane", "password": "jamie8989" }`

2. Login User (POST):
   - URL: `https://cdtjwt.onrender.com/api/login`
   - Method: POST
   - Body (JSON): `{ "username": "your_username", "password": "your_password" }`

3. Protected GET Endpoint:
   - URL: `https://cdtjwt.onrender.com/api/protected/get`
   - Method: GET
   - Headers: `Authorization: Bearer YOUR_TOKEN`

4. Protected POST Endpoint:
   - URL: `https://cdtjwt.onrender.com/api/protected/post`
   - Method: POST
   - Headers: `Authorization: Bearer YOUR_TOKEN`





