import {createStore} from 'vuex';
import branches1 from './modules/branches1';
import branches2 from './modules/branches2';
import branches3 from './modules/branches3';
import branches4 from './modules/branches4';
import branches5 from './modules/branches5';

const store = createStore({
    // Main state
    state(){
        return{
            isUpdate:false,
            oldBranch:null,
            branchType:null,
            isEditor:false,
            b1:false,
            b2:false,
            b3:false,
            b4:false,
            b5:false
        }
    },
    mutations:{
        // * Build some main functions *
        // Hide the menu when it clicked by Adding or deleting
        hideShowMenu:(state)=>{
            state.b1=false;
            state.b2=false;
            state.b3=false;
            state.b4=false;
            state.b5=false;
        },
        // Reset to add new main branch
        resetToAdd:(state)=>{
            state.oldBranch=null;
            state.branchType="branch1";
            state.isUpdate=false;
            $('.form-control').trumbowyg('html',`<h1 class="branch-name" id="branch-name"></h1>`);
        },
        // Set type of branch => 
        // prepare to add new branch in main branch
        // to reset the content in the editor 
        setType:(state,{type,data})=>{
            state.branchType=type;
            state.oldBranch=data;
            state.isUpdate=false;
            $('.form-control').trumbowyg('html',`<h1 class="branch-name" id="branch-name"></h1>`);
        },
        // Open text editor
        openEditor:(state)=>{
            state.isEditor=true;
            state.branchType="branch1";
        },
        // Close text editor
        closeEditor:(state)=>{
            state.isEditor=false;
            state.branchType=null;
            state.isUpdate=false;
            state.oldBranch=null;
            $('.form-control').trumbowyg('html',`<h1 class="branch-name" id="branch-name"></h1>`);
        }
    },
    modules:{
        branches1,
        branches2,
        branches3,
        branches4,
        branches5
    }
});

export default store;