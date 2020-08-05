Vue.component('AvatarComponent', {
	props: ['user'],
	template: `
	<div class="media">
	  <img :src="user.avatar" class="mr-3" width="60rem">
	  <div class="media-body text-justify">
	    <h5 class="mt-0 mb-0">{{ user.name }}
	    	<div class="btn-group btn-sm float-right" role="group" aria-label="Basic example">
		  		<button @click="onEdit" type="button" class="btn btn-outline-info btn-sm">Edit</button>
		  		<button @click="onDelete" type="button" class="btn btn-outline-danger btn-sm">Delete</button>
			</div>
	    </h5>
	    {{ user.details }}
	  </div>
	</div>
	`,
	methods: {
		onDelete() {
			this.$emit('delete', this.user.id);
		},
		onEdit() {
			this.$emit('edit', this.user.id);
		}
	}
});

Vue.component('FormComponent', {
	props: ['user', 'isediting'],
	template: `
	<div class="container">
		<form @submit.prevent="onSubmit">
			<p class="lead text-center">USER FORM</p>
			<div class="form-group">
				<div class="input-group input-group-sm mb-3">
				  <div class="input-group-prepend">
				    <span class="input-group-text">Name</span>
				  </div>
				  <input v-model="user.name" type="text" class="form-control">
				</div>
				<div class="input-group input-group-sm mb-3">
				  <div class="input-group-prepend">
				    <span class="input-group-text">Avatar</span>
				  </div>
				  <input v-model="user.avatar" type="text" class="form-control">
				</div>
				<div class="input-group input-group-sm mb-3">
				  <div class="input-group-prepend">
				    <span class="input-group-text">Details</span>
				  </div>
				  <textarea v-model="user.details" class="form-control"></textarea> 
				</div>
				<button type="submit" class="btn btn-sm btn-outline-primary btn-block">{{ isediting ? 'Update' : 'Save' }}</button>
				<button @click="onClear" v-if="isediting" type="button" class="btn btn-sm btn-outline-warning btn-block">Clear</button>
			</div>
		</form>
	</div>
	`,
	methods: {
		onSubmit(e){
			this.$emit('save');
		},
		onClear(){
			this.$emit('clear');
		}
	}
})











