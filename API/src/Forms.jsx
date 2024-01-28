import "./App.css";

const Users = ({request, setRequest}) => {
  return (
    <div >
      <form type='submit' onSubmit={e => e.preventDefault()} className="header">
        <button onClick={()=>{setRequest('users')}} className={request === 'users'? 'select':null}>users</button>
        <button onClick={()=>{setRequest('products')}} className={request === 'products'? 'select':null}>products</button>
        <button onClick={()=>{setRequest('carts')}} className={request === 'carts'? 'select':null}>carts</button>
      </form>
    </div>
  );
};

export default Users;
