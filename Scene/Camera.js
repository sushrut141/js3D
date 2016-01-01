/*
sets the current viewing mode 
and model view matrix

TODO : add handle to get mouse input  to get
		rotation
		add orthographic prjection support


options = {
	type : ortho,projection
	near : near plane,
	far : far plane,
	fov : field of view,
	aspect : aspect ratio
}
*/

JSENGINE.Camera = function(options)
{
	if(!options.type)
		throw ({'Camera : type of projection is required'});
	this._type = options.type;

	if(!options.near)
		throw ({'Camera : near plane is required'});
	this._near = options.nnear;

	if(!options.far)
		throw ({'Camera : far plane is required'});
	this._far = options.far;

	if(!options.fov)
		throw ({'Camera : field of view is required'});
	this._fov = options.fov;

	if(!options.aspect)
		throw ({'Camera : aspect ratio is required'});
	this._aspect = options.aspect;

	//model matrix
	this._model;

	//view matrix
	this._view;

	//projection matrix
	this._projection;

}


Object.defineProperties(
	JSENGINE.Camera.prototype,
	{
		type : {
			get : function(){
				return this._type;
			},
			set : function(type){
				this._type = type;
			}
		},
		near : {
			get  : function(){
				return this._near;
			},
			set : function(near){
				this._near = near;
			}
		},
		far  :{
			get : function(){
				return this._far;
			},
			set : function(far){
				this._far = far;
			}
		},
		fov : {
			get : function(){
				return this._fov;
			},
			set : function(fov){
				this._fov = fov;
			}
		},
		aspect : {
			get : function(){
				return this._aspect;
			},
			set : function(aspect){
				this._aspect = aspect;
			}
		},
		model : {
			get : function(){
				return this._model;
			}
		},
		view : {
			get : function(){
				return this._view;
			}
		},
		projection : {
			get : function(){
				return this._projection;
			}
		}

	});


JSENGINE.Camera.prototype.update = function()
{
	//TODO : get input from mouse 

}



