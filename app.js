const http = new easyHTTP;

// get posts 
http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
	error ? console.log(error) : console.log(posts);
})

// get single post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, posts){

	// error ? console.log(error) : console.log(posts);
// })

const data = {
	title: 'Custom Post', 
	body: 'This is a custom post'
};

// Create Post
http.post('https://jsonplaceholder.typicode.com/posts', data, (error, post) => {
	error ? console.log(error) : console.log(post);
});

// Update post
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (error, post) => {
	error ? console.log(error) : console.log(post);	
})

// Delete post 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, response){
	error ? console.log(error) : console.log(response);
})
