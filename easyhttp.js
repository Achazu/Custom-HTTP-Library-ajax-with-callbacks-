function easyHTTP(){
	this.http = new XMLHttpRequest();
	console.log(this.http)
}

// CRUD (create, read, update, delete)
// 1 - make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
	this.http.open('POST', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');

	this.http.onload = () => {
		callback(null, this.http.responseText)
	}

	this.http.send(JSON.stringify(data));
}

// 2 - make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
	this.http.open('GET', url, true)

	this.http.onload = () => {
		if(this.http.status === 200){
			callback(null, this.http.responseText);		
		} else {
			callback('Error: ' + this.http.status);
		} 
	}
	this.http.send()
}
// 3 - make an HTTP PUT Request

easyHTTP.prototype.put = function(url, data, callback) {
	this.http.open('PUT', url, true);
	this.http.setRequestHeader('Content-type', 'application/json');
	
	this.http.onload = () => {
		callback(null, this.http.responseText);
	}
	this.http.send(JSON.stringify(data));
}
// 4 - make an HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
	console.log(this)
	this.http.open('DELETE', url, true)
	
	this.http.onload = () => {
		this.http.status === 200 ? callback(null, 'Post deleted') : callback('Error: ' + this.http.status);
	}

	this.http.send();
}