import React,{Component} from 'react';
import { Table,Card,Button} from 'antd';
class rootlist extends Component{
    constructor(){
        super();
        this.state={
            dataSource:[]
        }
    }
     columns = [
        {
            title: '书名',
            dataIndex: 'bookName',
            key: 'bookName',
        },
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '总数',
            dataIndex: 'num',
            key: 'num',
        },
         {
             title: '编辑',
             dataIndex: 'address',
             key: 'address',
             render:()=>{
                 return(
                     <Button size='small' onClick={this.status}>借阅</Button>
                 )
             }
         },
    ];
    status=()=>{

    };
    // addBook=()=>{
    //     this.$axios.post('/api/adminbook/root/add',{userName:'suger',passWord:'6666'}).then((res)=>{
    //         console.log('add',res);
    //     })
    // }
    // update=()=>{
    //     this.$axios.post('/api/adminbook/root/update',{uid:'5dc12b90ce9fdb22cbb24eb1',rootLevel:'9'}).then((res)=>{
    //         console.log('updata',res);
    //     })
    // }
    render(){
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
        console.log(bookList)
        return (
          <div>
              <Card title='图书管理列表'>
                  <Table dataSource={bookList} columns={this.columns} />;
              </Card>
              {/*{bookList.map((item,index)=>{*/}
                  {/*return (*/}
                      {/*<div>{item.bookName}</div>*/}
                  {/*)*/}
              {/*})}*/}
              {/*<Button onClick={()=>{*/}
                  {/*let bookList=JSON.parse(window.localStorage.getItem('bookList'));*/}
                  {/*bookList.push({bookName:'十万个为什么',id:'hsisii222',num:'8'});*/}
                  {/*window.localStorage.setItem('bookList',JSON.stringify(bookList));*/}
                  {/*this.$axios.post('/api/adminbook/root/addbook',{uid:'5dc12b90ce9fdb22cbb24eb1',bookList}).then((res)=>{*/}
                      {/*console.log(res);*/}
                  {/*})*/}
              {/*}}>添加</Button>*/}

          </div>
        )
    }
}
export default rootlist;