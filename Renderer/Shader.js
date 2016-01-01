//TODO : 
//Parse shader src to store uniforms
//get attribute locations

/*
Shadder program must not be in use 
before passing it to the Draw Command list
*/

JSENGINE.Shader = function(options)
{
	if(!options.vShaderSrc)
		throw ({'Shader : vShaderSrc is required'});
	this._vShaderSrc = options.vShaderSrc;

	if(!options.fShaderSrc)
		throw ({'Shader : fShaderSrc is required'});
	this._fShaderSrc = options.fShaderSrc;

	if(!options.context)
		throw ({'Shader : context is required'});
	this._context = options.context;

	this._gl = this._context._gl;

	this._vShaderID;

	this._fShaderID;

	this._programID;

	this._attributes = [];

	this._uniforms = [];

	/*
	attribLocations.push({
		name : "string",
		location : loc`
	})
	*/

	this._attribLocations = [];

	this._uniformLocations = [];

}

function checkCompileStatus(id)
{
	gl.compileShader(id);
	if(!gl.getShaderParameter(id,gl.COMMPILE_SATUS))
	{
		console.log(gl.getShaderInfoLog(id));
		throw ({'Shader : failed to compile shader'});
	}
}


function getShaderAttribLocations()
{
	//TODO
}

JSENGINE.Shader.prototype.createShaderProgram = function()
{
	var gl = this._context._gl;
	this._programID = gl.createProgram();

	this._vShaderID = gl.createShader(gl.VERTEX_SHADER);
	this._fShaderID = gl.createShader(gl.FRAGMENT_SHADER);

	gl.shaderSource(this._vShaderID,this._vShaderSrc);
	gl.shaderSource(this._fShaderId,this._fShaderSrc);

	checkCompileStatus(this._vShaderID);
	checkCompileStatus(this._fShaderID);

	gl.attachShader(this._programID, this._vShaderID);
	gl.attachShader(this._programID, this._fShaderID);

	//TODO
	getShaderAttribLocations();

	gl.linkProgram(this._programID)
}

JSENGINE.Shader.prototype.use = function()
{
	var gl = this._context._gl;
	gl.useProgram(this._programID);
}

JSENGINE.Shader.prototype.getAttributeLocation = function(string)
{
	for(var i = 0;i<this._attribLocations.length ; i++){
		if(this._attributes[i].name===string)
			return this._attribLocations[i].location;
	}
	return undefined;
}