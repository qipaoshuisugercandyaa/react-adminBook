import React,{Component} from 'react';
import {Button} from 'antd';
class rootlist extends Component{
    addBook=()=>{
        this.$axios.post('/api/adminbook/root/add',{userName:'suger',passWord:'6666'}).then((res)=>{
            console.log(res);
        })
    }
    update=()=>{
        this.$axios.post('/api/adminbook/root/update',{uid:'5dc12b90ce9fdb22cbb24eb1',rootLevel:'9'}).then((res)=>{
            console.log(res);
        })
    }
    render(){
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
        console.log(bookList)
        return (
          <div>
              {bookList.map((item,index)=>{
                  return (
                      <div>{item.bookName}</div>
                  )
              })}
              <button onClick={()=>{
                  let bookList=JSON.parse(window.localStorage.getItem('bookList'));
                  bookList.push({bookName:'十万个为什么',id:'hsisii222',num:'8'});
                  window.localStorage.setItem('bookList',JSON.stringify(bookList));
                  this.$axios.post('/api/adminbook/root/addbook',{uid:'5dc12b90ce9fdb22cbb24eb1',bookList}).then((res)=>{
                      console.log(res);
                  })
              }}>添加</button>
          </div>

        )
    }
}
export default rootlist;