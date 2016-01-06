/*
draw command to be queued in render command list
draw arrays will be called on each command execution

options = {
	context : gl context
	mode : gl.TRIANGLES,gl.POINTS...,
	program : shader program
	array : VAO,
	indices : element array buffer id,
	offset : offset innto array
	count : no of vertices to render

} 
*/

JSENGINE.DrawCommand = function(options)
{
	if(!options.context)
		throw ({'DrawCommand : gl context is required'});
	this._mode = options.mode;

	this._context = options.context;

	if(!options.mode)
		throw ({'DrawCommand : primitive render ype is required '});

	if(!options.array)
		throw ({'DrawCommand : Vertex array object is required'});
	this._vertexArray = options.array;

	if(!options.program)
		throw ({'DrawCommand : Shader program is required'});
	this._program = options.program;

	//switch between draw arrys and draw elements depending
	//on whether this is defined
	this._indices = options.indices;

	if(!options.offset)
		this._offset = 0;
	else
		this._offset = options.offset;

	if(!options.count)
		throw ({'DrawCommand : count is required'});
	this._count = options.count;
	
}

function initShaderProgram()
{
	var shader = this._program;
	shader.createShaderProgram();;
	shader.use();
}


JSENGINE.DrawCommand.prototype.execute = function()
{
	var gl = this._context._gl;

	initShaderProgram();

	var array = this._vertexArray;

	array.enable();

	if(indices)
		gl.drawElements(this._mode,this._count,gl.UNSIGNED_INT,this._offset);
	else{
		gl.drawArrays(this._mode, this._offset, this._count);
	}

}