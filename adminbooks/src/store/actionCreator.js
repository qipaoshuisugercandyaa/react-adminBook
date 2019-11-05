export default {
    changeToken(status){
        let action={
            type:'CHANGE_TOKEN',
            params:status
        };
        return action;
    }
}