/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.GpuTexture = function ( webgltexture, width, height, format, type, mapping, wrapS, wrapT, magFilter, minFilter, anisotropy, encoding ) {

	THREE.Texture.call( this, null, mapping, wrapS, wrapT, magFilter, minFilter, format, type, anisotropy, encoding );

	this.image = { webgltexture: webgltexture, width: width, height: height };

	this.magFilter = magFilter !== undefined ? magFilter : THREE.NearestFilter;
	this.minFilter = minFilter !== undefined ? minFilter : THREE.NearestFilter;

	this.flipY = false;
	this.generateMipmaps = false;
	
	this.needsUpdate = true

};

THREE.GpuTexture.prototype = Object.create( THREE.Texture.prototype );
THREE.GpuTexture.prototype.constructor = THREE.GpuTexture;