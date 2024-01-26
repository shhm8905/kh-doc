import axios from "axios";
import store from "..";

const API = axios.create({baseURL:"http://localhost:5000/branches5"});

const state = {
    branches5:[],
}

const getters = {
    branches5:(state)=>state.branches5,
}

const actions = {
    // Get branches list number 5
    async getBranches5({commit}){
        const data = await API.get('/')
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranches5',data);
    },
    // Get a specific branch
    async getBranch5({commit},id){
        const data = await API.get(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranch5',data);
    },
    // Add new main branch
    async addBranch5({commit},branch){
        const data = await API.post('/',branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('addBranch5',data);
    },
    // Update main branch   
    async updateBranch5({commit},branch){
        const data = await API.patch(`/${branch.id}`,branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('updateBranch5',data);
    },
    // Delete main branch
    async deleteBranch5({commit},id){
        const data = await API.delete(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('deleteBranch5',data);
    }
}

const mutations = {
    // Get all list branches number 5
    getBranches5:(state,data)=>{
        state.branches5=data
    },
    // Get a specific branch 
    getBranch5:(state,data)=>{
        $('.form-control').trumbowyg('html',data.content);
        store.state.oldBranch=data;
        store.state.isUpdate=true;
        store.state.branchType="branch5";
    },
    // Add new branch
    addBranch5:(state,data)=>{
        state.branches5.push(data);
    },
    // Update branch 
    updateBranch5:(state,data)=>{
        state.branches5.filter((branch)=>{
            return branch.id===data.id?data:branch;
        });
        store.state.isUpdate=false;
    },
    // Delete branch
    deleteBranch5:(state,id)=>{
        $('.form-control').trumbowyg('html','<h1 class="branch-name" id="branch-name"></h1>');
        state.branches5=state.branches5.filter((branch5)=>{
            return branch5.id!==id;
        });
        store.state.isUpdate=false;
        store.state.oldBranch=null;
        store.state.branchType=null;
    },
    // * Build some main functions *

    // View list of specific branch
    showList5:(state,id)=>{
        state.branches5.map((item)=>{
            if(item.id===id){
                return(item.isShow=!item.isShow);
            }
        })
    },
    // Show menu list(Adding and Deleting)
    showMenu5:(state,id)=>{
        let {b1,b2,b3,b4,b5}=store.state;
        state.branches5.some((branch5)=>{
            if(branch5.id===id&&!branch5.isAdd&&!b1&&!b2&&!b3&&!b4&&!b5){
                branch5.isAdd=true;
                return store.state.b5=true;
            }else{
                branch5.isAdd=false;
                return store.state.b5=false;
            }
        })
    }, 
}

export default {state,getters,actions,mutations};