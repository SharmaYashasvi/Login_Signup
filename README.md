# Login_Signup
Login and Signup fully functional user interface .

SetUp :

 Unzip the file
 
 Run npm i
 
Create a env file according to file structure given above.
 
 Give variables name same as below
 
      PORT=4000
      
      DB_URI="Your Mongodb link "
      
      JWT_SECRET = your key
      
      JWT_EXPIRE = 5d
      
      COOKIE_EXPIRE=5
      
      CLOUDINARY_NAME= your cloudinary name
      
      CLOUDINARY_API_KEY=
      
      CLOUDINARY_API_SECRET=
      
    when you run it on localhost make sure to add proxy in frontend package.json file. 
    like,
    for example my backend is running on 4000 port
    
    so i have to add  http://192.168.226.88:4000
    
    http://192.168.226.88 is prot address where my frontend run , in your case you add your own address.
      
    Go to frontend folder and run npm i
    
    Now you run backend by using command : npm run dev 
    
    Now you run frontend by using command : npm start
