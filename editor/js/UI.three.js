// Texture

UI.Texture = function ( position ) {

	UI.Element.call( this );

	var scope = this;

	this.texture = new THREE.Texture();

	this.dom = document.createElement( 'input' );
	this.dom.type = 'file';
	this.dom.style.position = position || 'relative';
	this.dom.style.marginTop = '-2px';
	this.dom.style.marginLeft = '-2px';

	this.onChangeCallback = null;

	this.dom.addEventListener( 'change', function ( event ) {

		var file = event.target.files[ 0 ];

		if ( file.type.match( 'image.*' ) ) {

			var reader = new FileReader();
			reader.addEventListener( 'load', function ( event ) {

				var image = document.createElement( 'img' );
				image.src = event.target.result;

				scope.texture.image = image;

				if ( scope.onChangeCallback ) scope.onChangeCallback();

			}, false );
			reader.readAsDataURL( file );

		}

	}, false );

	return this;

};

UI.Texture.prototype = Object.create( UI.Element.prototype );

UI.Texture.prototype.getValue = function () {

	return this.texture;

};

UI.Texture.prototype.onChange = function ( callback ) {

	this.onChangeCallback = callback;

	return this;

};
