import React,{Component} from 'react';
import { Table,Card,Button,message,Popconfirm} from 'antd';
class rootlist extends Component{
    constructor(){
        super();
        this.state={
            dataSource:[]
        }
    }
     columns = [
        {
            title: '书籍名称',
            dataIndex: 'bookName',
            key: 'bookName',
        },
        {
            title: '书籍ID',
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
             key: 'action',
             render:(data)=>{
                 return(
                     <div>
                         <Button size='small'>借阅</Button>
                         &nbsp;&nbsp;
                         <Button size='small' onClick={this.upBook.bind(this,data)}>下架</Button>
                         &nbsp;&nbsp;
                         <Popconfirm
                             title="确定删除吗？"
                             onConfirm={this.delBook.bind(this,data)}
                         >
                             <Button size='small'>删除</Button>
                         </Popconfirm>
                     </div>
                 )
             }
         },
    ];
    upBook(data){

    }
    delBook(data){
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
         bookList=bookList.filter((item,index)=>{
            return item.id!==data.id;
        });
        this.$axios.post('/api/adminbook/root/del',{uid:'5dc241203c569098ec8db4c8',bookList}).then((res)=>{
            if(res.err===0){
                message.success('删除成功');
                window.localStorage.setItem('bookList',JSON.stringify(bookList));
                this.props.history.replace('/admin/rootlist');
            }
        });
    };
    render(){
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
        return (
          <div>
              <Card title='图书管理列表'>
                  <Table dataSource={bookList} columns={this.columns} />;
              </Card>
          </div>
        )
    }
}
export default rootlist;