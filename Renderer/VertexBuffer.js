JSENGINE.VertexBuffer = function(options)
{
	if(!options.context)
		throw ({'VertexBuffer : context is required'});
	this._context = options.context;

	if(!options.type)
		throw ({'VertexBuffer : buffer type is required'});
	this._bufferType = options.type;

	if(!options.data)
		throw ({'VertexBuffer : data array is required'});
	this._data = options.data;

	if(!options.usage)
		this._usage = this._context._gl.STATIC_DRAW
	else
		this._usage = options.usage;

	//vertex buffer ID
	this._bufferID;

}


JSENGINE.VertexBuffer.prototype.create = function()
{
	var gl = this._context._gl;
	if(!this._created){
		this._bufferId = gl.createBuffer();
		this.bind();
		gl.bufferData(this._type,new Float32Array(this._data),this._usage);
		this.unbind();
		this._created = true;
	}	
}

JSENGINE.VertexBuffer.createIndexBuffer = function()
{
	var gl = this._context._gl;
	if(!this._created)
	{
		this._bufferID = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._bufferID);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this._data),gl.STATIC_DRAW);
	}
}

JSENGINE.VertexBuuffer.prototype.bind = function()
{
	var gl = this._contex._gl;

	gl.bindBuffer(this._type,this._bufferID);

}

JSENGINE.VertexBuffer.prototype.unbind = function()
{
	var gl = this._context._gl;
	gl.bindBuffer(this._type,null);
}

JSENGINE.VertexBufffer.prototype.update = function(data)
{
	var gl = this._context._gl;
	this.bind();
	gl.bufferData(this._type,new Float32Array(data),this._usage);
	this.unbind();
}

JSENGINE.VertexBuffer.prototype.updateSubBuffer = function(data,offset)
{
	if(data.length > this._data.length)
		throw ({'VertexBuffer  : Buffer is not large ennough'});
	else{
		var gl = this._context._gl;
		this.bind();
		gl.bufferSubData(this._type, offset, new Float32Array(data));
		this.unbind();
	}
}

JSENGINE.VertexBuffer.prototype.destroy = function()
{
	var gl = this._context._gl;
	gl.deleteBuffer(this._bufferID);
	this._created = false;
}