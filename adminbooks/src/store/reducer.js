let state={
    tokenModal:true
};
export default (preState=state,action)=>{
    let newData=JSON.parse(JSON.stringify(preState));
    let {type,params}=action;
    switch (type){
        case 'CHANGE_TOKEN':
            newData.tokenModal=params;
            break;
    }
    return newData;
}