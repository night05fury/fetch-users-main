import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

type user = Array<{
  id: string,
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  phone: string,
  address: {
    address: string,
    city: string,
    state: string
  }
  
}>
export default function Home() {
  const [users, setUsers] = useState<user> ([])
  console.log(users.length == 1)

  useEffect(() =>{
    const getUsers  = async () => {
        const data = await fetch('https://dummyjson.com/users');
        if(data.ok){
          const users = await data.json();
          setUsers(users.users)
        }
    }
    getUsers();
   
  }, []);
  console.log(users);

  if(users.length == 0){
    return <div className='container text-4xl mx-auto sm:p-10'>
      <h1>Task 4</h1> 
      <div>
        <h2>Loading...</h2>
      </div>
      </div>
  }
  return (
   <div className='container mx-auto py-5 my-5'>
      <h1 className='text-4xl  font-bold p-1 sm:px-10'>Task 4</h1>
        <div className='p-2 sm:p-10'>
          <h2>Users Table</h2>

          <table>
            <thead>
              <tr className=''>
              <th>ID</th>
              <th>First Name</th>
               <th>Last Name</th>
               <th>username</th>
               <th> email</th>
                <th> phone</th>
               <th>address</th>
                </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.address +", " + user.address.city + ", " + user.address.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
   </div>
  )
}
