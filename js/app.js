$('[data-group]').each(function(){
	var $allTarget = $(this).find('[data-target]'),
			$allClick = $(this).find('[data-click]'),
			activeClass = 'active';
	
	$allTarget.first().addClass(activeClass);
	$allClick.first().addClass(activeClass);
	
	$allClick.click(function(e){
		e.preventDefault();
		
		var id = $(this).data('click'),
				$target = $('[data-target="' + id + '"]');
		
		$allClick.removeClass(activeClass);
		$allTarget.removeClass(activeClass);
		
		$target.addClass(activeClass);
		$(this).addClass(activeClass);
	});
});

$('.menu-nav a[href^="#"]').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
			menuHeight = $('.menu').innerHeight(),
			targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
});

$('.logo').click(function(e){
	e.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 500)
});

$('section').each(function(){
	var height = $(this).height(), // Pega o tamanho total da section
		offsetTop = $(this).offset().top, // Distância da section até o topo
		menuHeight = $('.menu').innerHeight(),
		id = $(this).attr('id'), // Atribui o id da section na variável id
		$itemMenu = $('a[href="#' + id + '"]'); // Atribui o href com o #id na variavel $itemMenu
	
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop(); // Coloca na variável scrollTop a distancia do scroll na tela até o topo
		if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
			$itemMenu.addClass('active');
		} else {
			$itemMenu.removeClass('active');
		}
	});
});

$('.mobile-btn').click(function(){
	$(this).toggleClass('active'); // toggleClass ativa ou desativa caso já estiver ativado
	$('.mobile-menu').toggleClass('active');
});