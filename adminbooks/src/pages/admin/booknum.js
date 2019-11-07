import React,{Component} from 'react';
import ReactEcharts from 'echarts-for-react';
import {Card} from 'antd';
class bookNum extends Component{
    getOption(){
        return {
                title : {
                    text: '书籍占比统计图',
                    subtext: '纯属虚构',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:this.data,
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
    }
    render(){
        let bookList=JSON.parse(window.localStorage.getItem('bookList'));
        this.data=bookList.map((item,index)=>{
            return (
                {value:item.num,name:item.bookName}
            )
        });
        return(
            <div>
                <Card>
                    <ReactEcharts option={this.getOption()}></ReactEcharts>
                </Card>
            </div>
        )
    }
}
export default bookNum;