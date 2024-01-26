<template>
    <div class="my-editor">
        <button name="submit" @click="handleSubmit">
            <i class="fa fa-check-circle" aria-hidden="true" title="Update The Branch" v-if="isUpdate"></i>
            <i class="fa fa-plus-circle" aria-hidden="true" title="Add New Branch" v-else></i>
        </button>
        <trumbowyg v-model="form.content" :config="configs" class="form-control"></trumbowyg>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
import Trumbowyg from 'vue-trumbowyg';
import 'trumbowyg/dist/ui/trumbowyg.css';
import 'trumbowyg/dist/plugins/colors/trumbowyg.colors';
import 'trumbowyg/dist/plugins/colors/ui/trumbowyg.colors.css';
import "trumbowyg/dist/plugins/history/trumbowyg.history.min.js";
import "trumbowyg/dist/plugins/base64/trumbowyg.base64.min.js";

export default{
    name:'Editor',

    components: {
      "trumbowyg": Trumbowyg
    },

    data(){
        return{
            form:{
                content: `<h1 class="branch-name" id="branch-name"></h1>` ,
                body:null
            },
            configs: {
                autogrow: true,
                removeformatPasted: true,
                imageWidthModalEdit: true,
                btns: [
                    ['viewHTML'],
                    ['historyUndo', 'historyRedo'],
                    ['formatting'],
                    ['bold', 'italic'],
                    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                    ['foreColor'], ['backColor'],
                    ['indent', 'outdent'],
                    ['horizontalRule'],
                    ['unorderedList', 'orderedList'],
                    ['superscript', 'subscript'],
                    ['link'],
                    ['btnGrp-image'],
                    ['removeformat'],
                    ['fullscreen'],
                ],
                btnsDef: {
                    'btnGrp-image': {
                        dropdown: ['insertImage', 'base64'],
                        ico: 'insertImage'
                    }   
                },
                
            },
        }
    },

    computed:{
        ...mapState(["isUpdate","oldBranch","branchType"]),
    },
    
    methods:{
        ...mapActions(['updateBranch1','getBranches1','addBranch1']),
        ...mapActions(['updateBranch2','getBranches2','addBranch2']),
        ...mapActions(['updateBranch3','getBranches3','addBranch3']),
        ...mapActions(['updateBranch4','getBranches4','addBranch4']),
        ...mapActions(['updateBranch5','getBranches5','addBranch5']),
        
        handleSubmit(){
            const branchName=document.getElementById('branch-name');
            const newBranch={
                id:Math.floor(Math.random()*10000),
                title: branchName.innerText ,
                content: this.form.content,
                isShow:0,
                isAdd:0,
            };
            const updatedBranch={
                ...this.oldBranch,
                title:branchName.innerText,
                content:this.form.content
            }
            if (this.isUpdate) {
                if(newBranch.title.length>2){
                    switch (this.branchType) {
                        case 'branch1':
                            this.updateBranch1(updatedBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            setTimeout(()=>this.getBranches1(),200);
                            break;
                        case 'branch2':
                            this.updateBranch2(updatedBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            setTimeout(()=>this.getBranches2(),200);
                            break;
                        case 'branch3':
                            this.updateBranch3(updatedBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            setTimeout(()=>this.getBranches3(),200);
                            break;
                        case 'branch4':
                            this.updateBranch4(updatedBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            setTimeout(()=>this.getBranches4(),200);
                            break;
                        case 'branch5':
                            this.updateBranch5(updatedBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            setTimeout(()=>this.getBranches5(),200);
                            break;
                        default:
                            break;
                    }
                }else{
                    alert('Please the name of branch most to be more than two letters!!')
                }
            }else{
                if(newBranch.title.length>2){
                    switch (this.branchType) {
                        case null:
                            alert('You must select a branch first!!!');
                            break;
                        case 'branch1':
                            this.addBranch1(newBranch);
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            break;
                        case "branch2":
                            this.addBranch2({
                                ...newBranch,
                                branch_id:this.oldBranch.id
                            });
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            break;
                        case "branch3":
                            this.addBranch3({
                                ...newBranch,
                                branch_id:this.oldBranch.id
                            });
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            break;
                        case "branch4":
                            this.addBranch4({
                                ...newBranch,
                                branch_id:this.oldBranch.id
                            });
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            break;
                        case "branch5":
                            this.addBranch5({
                                ...newBranch,
                                branch_id:this.oldBranch.id
                            });
                            this.form.content=`<h1 class="branch-name" id="branch-name"></h1>`;
                            break;
                        default:
                            break;
                    }
                }else{
                    alert('Please the name of branch most to be more than two letters!!')
                }
            }
        },
    }
}

</script>