Vue.component('AvatarComponent', {
	props: ['user'],
	template: `
	<div class="media">
	  <img :src="user.avatar" class="mr-3" width="60rem">
	  <div class="media-body text-justify">
	    <h5 class="mt-0 mb-0">{{ user.name }}</h5>
	    {{ user.details }}
	  </div>
	</div>

	`
});