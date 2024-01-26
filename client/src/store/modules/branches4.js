import axios from "axios";
import store from "..";

const API = axios.create({baseURL:"http://localhost:5000/branches4"});

const state = {
    branches4:[],
}

const getters = {
    branches4:(state)=>state.branches4,
}

const actions = {
    // Get branches list number 4
    async getBranches4({commit}){
        const data = await API.get('/')
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranches4',data);
    },
    // Get a specific branch
    async getBranch4({commit},id){
        const data = await API.get(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranch4',data);
    },
    // Add new main branch
    async addBranch4({commit},branch){
        const data = await API.post('/',branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('addBranch4',data);
    },
    // Update main branch   
    async updateBranch4({commit},branch){
        const data = await API.patch(`/${branch.id}`,branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('updateBranch4',data);
    },
    // Delete main branch
    async deleteBranch4({commit},id){
        const data = await API.delete(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('deleteBranch4',data);
    }
}

const mutations = {
    // Get all list branches number 4
    getBranches4:(state,data)=>{
        state.branches4=data
    },
    // Get a specific branch 
    getBranch4:(state,data)=>{
        $('.form-control').trumbowyg('html',data.content);
        store.state.oldBranch=data;
        store.state.isUpdate=true;
        store.state.branchType="branch4";
    },
    // Add new branch
    addBranch4:(state,data)=>{
        state.branches4.push(data);
    },
    // Update branch 
    updateBranch4:(state,data)=>{
        state.branches4.filter((branch)=>{
            return branch.id===data.id?data:branch;
        });
        store.state.isUpdate=false;
    },
    // Delete branch
    deleteBranch4:(state,id)=>{
        $('.form-control').trumbowyg('html','<h1 class="branch-name" id="branch-name"></h1>');
        state.branches4=state.branches4.filter((branch4)=>{
            return branch4.id!==id;
        });
        store.state.isUpdate=false;
        store.state.oldBranch=null;
        store.state.branchType=null;
    },
    // * Build some main functions *

    // View list of specific branch
    showList4:(state,id)=>{
        state.branches4.map((item)=>{
            if(item.id===id){
                return(item.isShow=!item.isShow);
            }
        })
    },
    // Show menu list(Adding and Deleting)
    showMenu4:(state,id)=>{
        let {b1,b2,b3,b4,b5}=store.state;
        state.branches4.some((branch4)=>{
            if(branch4.id===id&&!branch4.isAdd&&!b1&&!b2&&!b3&&!b4&&!b5){
                branch4.isAdd=true;
                return store.state.b4=true;
            }else{
                branch4.isAdd=false;
                return store.state.b4=false;
            }
        })
    }, 
}

export default {state,getters,actions,mutations};