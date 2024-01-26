<template>
    <ul class="menu">
        <li @click="handleAdding" v-if="deleteData!=='branch5'">Add new Branch</li>
        <li @click="handleDelete">Delete Branch</li>
    </ul>
</template>

<script>
import {mapActions} from 'vuex';

export default{
    name:'ActionsMenu',

    props:['branchId','branch','addData','deleteData'],

    methods:{
        ...mapActions(['deleteBranch1','getBranches1','deleteBranch2','getBranches2','deleteBranch3','getBranches3','deleteBranch4','getBranches4','deleteBranch5','getBranches5']),
        handleAdding(){
            this.$store.commit('setType',{type:this.addData,data:this.branch});
            this.$store.commit('hideShowMenu');
        },
        handleDelete(){
            this.$store.commit('hideShowMenu');
            const isDelete =confirm('Are you sure you want to delete this branch?');
            if(isDelete){
                switch (this.deleteData) {
                    case 'branch1':
                            this.deleteBranch1(this.branchId);
                            setTimeout(()=>this.getBranches1(),100);
                        break;
                    case 'branch2':
                        this.deleteBranch2(this.branchId);
                        setTimeout(()=>this.getBranches2(),100);
                        break;
                    case 'branch3':
                        this.deleteBranch3(this.branchId);
                        setTimeout(()=>this.getBranches3(),100);
                        break;
                    case 'branch4':
                        this.deleteBranch4(this.branchId);
                        setTimeout(()=>this.getBranches4(),100);
                        break;
                    case 'branch5':
                        this.deleteBranch5(this.branchId);
                        setTimeout(()=>this.getBranches5(),100);
                        break;
                    default:
                        break;
                }
            }
        },
    }
}

</script>