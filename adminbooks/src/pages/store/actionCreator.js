
export default {
    addList(matter){
        let action={
            type:'ADD_LIST',
            params:matter
        }
        return action
    },
    delList(index){
        let action={
            type:'DEL_LIST',
            params:index
        }
        return action
    },
    upDate(index){
        let action={
            type:'UP_DATE',
            params:index
        }
        return action
    }
}