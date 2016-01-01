/*
controls all aspects of the scene
primitives to be rendered are added to the scene
primitives encompass geometry ass well as rendering properties

scene update -> 
				update camera 
				update primitives?

*/


JSENGINE.Scene = function(options)
{
	if(!options.context)
		throw ({'gl context not defined'});
	this._context = context;


	//geometry to be rendered
	this._primtives = [];

	this._commandList = [];

}



JSENGINE.Scene.prototype.add = function(primitive)
{
	this._primitives.push(primitive);
}

JSENGINE.Scene.prototype.update = function()
{


}