import axios from "axios";
import store from "..";

const API = axios.create({baseURL:"http://localhost:5000/branches2"});

const state = {
    branches2:[],
}

const getters = {
    branches2:(state)=>state.branches2,
}

const actions = {
    // Get branches list number 2
    async getBranches2({commit}){
        const data = await API.get('/')
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranches2',data);
    },
    // Get a specific branch
    async getBranch2({commit},id){
        const data = await API.get(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranch2',data);
    },
    // Add new main branch
    async addBranch2({commit},branch){
        const data = await API.post('/',branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('addBranch2',data);
    },
    // Update main branch   
    async updateBranch2({commit},branch){
        const data = await API.patch(`/${branch.id}`,branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('updateBranch2',data);
    },
    // Delete main branch
    async deleteBranch2({commit},id){
        const data = await API.delete(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('deleteBranch2',data);
    }
}

const mutations = {
    // Get all list branches number 2
    getBranches2:(state,data)=>{
        state.branches2=data
    },
    // Get a specific branch 
    getBranch2:(state,data)=>{
        $('.form-control').trumbowyg('html',data.content);
        store.state.isUpdate=true;
        store.state.oldBranch=data;
        store.state.branchType="branch2";
    },
    // Add new branch
    addBranch2:(state,data)=>{
        state.branches2.push(data);
    },
    // Update branch 
    updateBranch2:(state,data)=>{
        state.branches2.filter((branch)=>{
            return branch.id===data.id?data:branch;
        });
        store.state.isUpdate=false;
    },
    // Delete branch
    deleteBranch2:(state,id)=>{
        $('.form-control').trumbowyg('html','<h1 class="branch-name" id="branch-name"></h1>');
        state.branches2=state.branches2.filter((branch2)=>{
            return branch2.id!==id;
        });
        store.state.isUpdate=false;
        store.state.oldBranch=null;
        store.state.branchType=null;
    },
    // * Build some main functions *

    // View list of specific branch
    showList2:(state,id)=>{
        state.branches2.map((item)=>{
            if(item.id===id){
                return(item.isShow=!item.isShow);
            }
        })
    },
    // Show menu list(Adding and Deleting)
    showMenu2:(state,id)=>{
        
        let {b1,b2,b3,b4,b5}=store.state;
        state.branches2.some((branch2)=>{
            if(branch2.id===id&&!branch2.isAdd&&!b1&&!b2&&!b3&&!b4&&!b5){
                branch2.isAdd=true;
                return store.state.b2=true;
            }else{
                branch2.isAdd=false;
                return store.state.b2=false;
            }
        })
    }, 
}

export default {state,getters,actions,mutations};