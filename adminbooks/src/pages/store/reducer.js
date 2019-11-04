import State from './state';

export default (preState=State,action)=>{
    console.log('触发action')
    let newDate=JSON.parse(JSON.stringify(preState))
    let {type,params}=action
    // console.log(type,params,newDate)
    switch(type){
        case 'ADD_LIST':
            newDate.list.push({matter:params,isFalse:false})
            // console.log(newDate)
            break;
        case 'DEL_LIST':
            newDate.list.splice(params,1)
            break;
        case 'UP_DATE':
            newDate.list[params].isFinish=true
            break;
        default:
            break;
    }
    return newDate
}