jQuery(function() {
	initHeightcol();
});

function initHeightcol() {
	// var column = jQuery('.column');
	var maxHeight = 0;
	jQuery('.holder').each(function() {
		var holder = jQuery(this);
		var items = holder.find('#block1,#block2');
			items.each(function() {
				if ( jQuery(this).height() > maxHeight ) {
					maxHeight = jQuery(this).height();
				}
			});
			items.css({
				height:maxHeight + 'px',
				color: '#f0f'
			});
	 })
}