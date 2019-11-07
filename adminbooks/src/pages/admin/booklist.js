import React,{Component} from 'react';
import { Table, Input, Button, Icon ,Card} from 'antd';
import Highlighter from 'react-highlight-words';
const  data=JSON.parse(window.localStorage.getItem('bookList'));
class BookList extends Component{
 constructor(){
     super();
     this.state = {
         searchText: '',
     };
 };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render(){
        const columns = [
            {
                title: '书籍名称',
                dataIndex: 'bookName',
                key: 'bookName',
                width: '50%',
                ...this.getColumnSearchProps('name'),
            },
            {
                title: '书籍ID',
                dataIndex: 'id',
                key: 'id',
                width: '25%',
                ...this.getColumnSearchProps('age'),
            },
            {
                title: '书籍数量',
                dataIndex: 'num',
                key: 'num',
                ...this.getColumnSearchProps('address'),
            },
        ];
        return (
            <Card title='书籍信息列表'>
                <Table columns={columns} dataSource={data} />
            </Card>
           );
    }

}
export default BookList;