import { Await } from "react-router-dom"

function transaction() {
  let data = {
  name: "vikas",
  amount:1,
  number: '9999999999',
  MID: 'MID' + Date.now(),
  transactionId: 'T' + Date.now()
  }
  const HandleClick = async() => {
    try {
      await axios.post('http://localhost:5173/transaction', data).then(res =>{
      console.log(res.data)
      }).catch(err=>{
      console.log(err)
      })
      } catch (error) {
      console.log(error) }
  }
  return (
    <>
  <button onClick={HandleClick}>Pay Now</button>
  </>

)
}
export default transaction;