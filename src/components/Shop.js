import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const balance = useSelector((state) => state.amount); 
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Deposite/ withdrow Money</h2>
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
         Update Balance
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  ) 
}

export default Shop
