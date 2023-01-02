export default{
    namespaced:true,
    state: {
        counter:{
            count:0
        }
    },
    mutations: {
        incr_count: function(state,payload){
            state.counter.count+=payload.value;
        },
        decr_count: function(state,payload){
            state.counter.count-=payload.value;
        }
    },
    actions: {
        incrementcounter:function({commit},payload){
            return commit ("incr_count",payload) 
        },
        decrementcounter:function({commit},payload){
            return commit ("decr_count",payload) 
        },
    },
    modules: {
    }
}