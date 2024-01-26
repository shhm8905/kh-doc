import axios from "axios";
import store from "..";

const API = axios.create({baseURL:"http://localhost:5000/branches3"});

const state = {
    branches3:[],
}

const getters = {
    branches3:(state)=>state.branches3,
}

const actions = {
    // Get branches list number 3
    async getBranches3({commit}){
        const data = await API.get('/')
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranches3',data);
    },
    // Get a specific branch
    async getBranch3({commit},id){
        const data = await API.get(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranch3',data);
    },
    // Add new branch
    async addBranch3({commit},branch){
        const data = await API.post('/',branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('addBranch3',data);
    },
    // Update branch   
    async updateBranch3({commit},branch){
        const data = await API.patch(`/${branch.id}`,branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('updateBranch3',data);
    },
    // Delete branch
    async deleteBranch3({commit},id){
        const data = await API.delete(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('deleteBranch3',data);
    }
}

const mutations = {
    // Get all list branches number 3
    getBranches3:(state,data)=>{
        state.branches3=data
    },
    // Get a specific branch 
    getBranch3:(state,data)=>{
        $('.form-control').trumbowyg('html',data.content);
        store.state.oldBranch=data;
        store.state.isUpdate=true;
        store.state.branchType="branch3";
    },
    // Add new branch
    addBranch3:(state,data)=>{
        state.branches3.push(data);
    },
    // Update branch 
    updateBranch3:(state,data)=>{
        state.branches3.filter((branch)=>{
            return branch.id===data.id?data:branch;
        });
        store.state.isUpdate=false;
    },
    // Delete branch
    deleteBranch3:(state,id)=>{
        $('.form-control').trumbowyg('html','<h1 class="branch-name" id="branch-name"></h1>');
        state.branches3=state.branches3.filter((branch3)=>{
            return branch3.id!==id;
        });
        store.state.isUpdate=false;
        store.state.oldBranch=null;
        store.state.branchType=null;
    },
    // * Build some main functions *

    // View list of specific branch
    showList3:(state,id)=>{
        state.branches3.map((item)=>{
            if(item.id===id){
                return(item.isShow=!item.isShow);
            }
        })
    },
    // Show menu list(Adding and Deleting)
    showMenu3:(state,id)=>{
        let {b1,b2,b3,b4,b5}=store.state;
        state.branches3.some((branch3)=>{
            if(branch3.id===id&&!branch3.isAdd&&!b1&&!b2&&!b3&&!b4&&!b5){
                branch3.isAdd=true;
                return store.state.b3=true;
            }else{
                branch3.isAdd=false;
                return store.state.b3=false;
            }
        })
    }, 
}

export default {state,getters,actions,mutations};