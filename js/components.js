Vue.component('AvatarComponent', {
	props: ['user'],
	template: `
	<div class="media">
	  <img :src="user.avatar" class="mr-3" width="60rem">
	  <div class="media-body text-justify">
	    <h5 class="mt-0 mb-0">{{ user.name }}
	    	<div class="btn-group btn-sm float-right" role="group" aria-label="Basic example">
		  		<button type="button" class="btn btn-outline-info btn-sm">Edit</button>
		  		<button type="button" class="btn btn-outline-danger btn-sm">Delete</button>
			</div>
	    </h5>
	    {{ user.details }}
	  </div>
	</div>
	`
});











