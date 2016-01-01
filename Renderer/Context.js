//TODO : 
//add function to get gl ccontext from canvas


JSENGINE.Context = function(options)
{
	if(!options.gl)
		throw ({'Context : gl rendering context is required'});
	this._gl = option.gl;

	this._canvas = this._gl.canvas;

	this._width = this._camvas.width;

	this._height = this._canvas.height;

}


Object.defineProperties(JSENGINE.Context.prototype,{

	gl : {
		get : function(){
			return this._gl;
		}
	},
	width : {
		get  : function(){
			return this._width;
		}
	},
	height : {
		get : function(){
			return this._height;
		}
	}


});

JSENGINE.Context.prototype.getContext = function()
{
	//TODO : document.getElementById()??
}