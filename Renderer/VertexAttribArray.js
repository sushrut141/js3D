/*

options = {
	buffer : vertex buffer,
	location : attribute location
	offset : offset,
	stride : stride,
	DataType  : float,uint..,,
	context : gl context
	components : components per attribute

};

*/

JSENGINE.VertexArray = function(options)
{
	if(!options.buffer)
		throw ({'VertexAttribarray vertex buffer is required'});
	this._vbo = options.buffer;

	if(!options.offset)
		this._offset = 0;
	else
		this._offset = options.offset;

	if(!options.stride)
		this._stride = 0;
	else
		this._stride = opttions.stride;

	if(!options.datatype)
		throw ({'VertexAttribArray  : Data type is required'});
	this._dataType = options.datatype;

	if(!options.location)
		throw ({'VertexAttribArray : attribute location is required'});
	this._locatiion = options.location;

	if(!options.context)
		throw ({'VertexattribArray : gl context is required'});
	this._context = options.context;

	if(!options.components)
		throw ({'Vertexattribarrray : components per attribute required'});
	this._components = options.components;
}


JSENGINE.VertexArray.prototype.enable = function()
{
	var gl = this._context._gl;
	var num = this._components;
	var type = this._dataType;
	var offset = this._offset;
	var stride = this._stride;
	var loc = this._location;

	this._vbo.bind();
	gl.enableVertexAttribArray(this._location);
	gl.vertexAttribPointer(loc,num,type,false,offset,stride);
	this._vbo.unbind();
}

JSENGINE.VertexArray.prototype.disable = function()
{
	var gl = this._conntext._gl;
	gl.disablevertexAttribbbarray(this._location);
}
