import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'


function App() {
  const [count, setCount] = useState(0)
  const Blog = () => {
    const blogs = [
        {id:1 , name:'Mr. Raju' ,date: 'Mar 14 (4 Days ago)',title :'How to get your first job as a self-taught programmer',Aimage:'https://cdn-icons-png.flaticon.com/512/164/164440.png?w=740&t=st=1680196918~exp=1680197518~hmac=af5942f4b82cd5741fd37f9e4a7a745807058e13c0916775d1b2b78af22d1f22' , BCimage : 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=740&t=st=1680196267~exp=1680196867~hmac=3b44aed22fba097e7af63633676db695e9c5269b0472165425816ebc77bd00e3' ,
    },
        {id:2 , name:'Mr. Saju' ,date: 'Mar 14 (6 Days ago)',title :'How to get your first job as a Web programmer',Aimages:'https://cdn-icons-png.flaticon.com/512/164/164446.png?w=740&t=st=1680196945~exp=1680197545~hmac=47db8897e29dec21bca6b79ad4f48ddf8e95f9c3a48a44883de927703cf60b9c' , BCimage: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=740&t=st=1680196299~exp=1680196899~hmac=12c278d734cff683f63778e237d3dd7bb1e2a57807e28c6f6cb3efcd0ce1408e' ,}
        ,
        {id:3 , name:'Mr. Naju' ,date: 'Mar 14 (8 Days ago)',title :'How to get your first job as a Ehtical hacker',Aimages:'https://cdn-icons-png.flaticon.com/512/164/164460.png?w=740&t=st=1680196963~exp=1680197563~hmac=59a94b20146036443c33e2b1044e83f7fec1a5f595a0dd96107479d3748bafe5' , BCimage:'https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?w=740&t=st=1680196357~exp=1680196957~hmac=f7a255602e7dfb407a6374b2d8fe205754d679e0b27ad6ee8661b4d79befaf00'  ,},

        {id:4 , name:'Mr. Tajul' ,date: 'Mar 14 (10 Days ago)',title :'How to get your first job as a Web programmer',Aimages:'https://cdn-icons-png.flaticon.com/512/164/164458.png?w=740&t=st=1680196980~exp=1680197580~hmac=19bdad99c501613581aec3ed44685e2d58ab7cd8b3f89de4385ac5dcf0e2d9f5' , BCimage: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010127.jpg?w=740&t=st=1680196372~exp=1680196972~hmac=6ad82518ce8d48415f1add5e03c378a137290e6ead7892f00a280a4c71834cf1' ,}
    ]
  return (
   
    <div className="App">
     <Header></Header>
     
     {
            blogs.map(blog => <Blog 
              key={blog.id}
            blog= {blog}
            ></Blog>)
          }
    </div>
  )
}


export default App
