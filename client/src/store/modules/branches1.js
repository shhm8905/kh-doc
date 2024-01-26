import axios from "axios";
import store from "..";

const API = axios.create({baseURL:"http://localhost:5000/branches1"});

const state={
    branches1:[],
}

const getters ={
    branches1:(state)=>state.branches1,
}

const actions={
    // Get Mainlist
    async getBranches1({commit}){
        const data = await API.get('/')
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit("getBranches1",data);
    },
    // Get a specific branch
    async getBranch1({commit},id){
        const data = await API.get(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('getBranch1',data);
    },
    // Add new main branch
    async addBranch1({commit},branch){
        const data = await API.post('/',branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('addBranch1',data);
    },
    // Update main branch   
    async updateBranch1({commit},branch){
        const data = await API.patch(`/${branch.id}`,branch)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('updateBranch1',data);
    },
    // Delete main branch
    async deleteBranch1({commit},id){
        const data = await API.delete(`/${id}`)
        .then((res)=>res.data).catch((err)=>console.log(err));
        commit('deleteBranch1',data);
    }
}

const mutations = {
    // Get all mainlist
    getBranches1:(state,data)=>{
        state.branches1=data;
    },
    // Get a specific branch in branches list 1
    getBranch1:(state,data)=>{
        $('.form-control').trumbowyg('html',data.content);
        store.state.oldBranch=data;
        store.state.isUpdate=true;
        store.state.branchType="branch1";
    },
    // Add new main branch
     addBranch1:(state,data)=>{
        state.branches1.push(data);
    },
    // Update main branch 
    updateBranch1:(state,data)=>{
        state.branches1.filter((branch)=>{
            return branch.id===data.id?data:branch;
        });
        store.state.isUpdate=false;
    },
    // Delete main branch
    deleteBranch1:(state,id)=>{
        $('.form-control').trumbowyg('html','<h1 class="branch-name" id="branch-name"></h1>');
        state.branches1=state.branches1.filter((branch1)=>{
            return branch1.id!==id;
        });
        store.state.isUpdate=false;
        store.state.oldBranch=null;
        store.state.branchType=null;
    },

    // * Build some main functions *

    // View list of specific branch
    showList1:(state,id)=>{
        state.branches1.map((item)=>{
            if(item.id===id){
                return(item.isShow=!item.isShow);
            }
        })
    },
    // Show menu list(Adding and Deleting)
    showMenu1:(state,id)=>{
        let {b1,b2,b3,b4,b5}=store.state;
        state.branches1.some((branch1)=>{
            if(branch1.id===id&&!branch1.isAdd&&!b1&&!b2&&!b3&&!b4&&!b5){
                branch1.isAdd=true;
                return store.state.b1=true;
                
            }else{
                branch1.isAdd=false;
                return store.state.b1=false;
            }
        });
    }, 
    
    

}

export default {state,getters,actions,mutations};