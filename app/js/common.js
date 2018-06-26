$(function() {

	//Показ блока навигации при нажатии на кнопку на экранах уже 1024px
	$('.showNav').on('click', function(){
		$('.nav').slideToggle();
	});

	//Копирование контакта в буфер обмена
	new ClipboardJS('.contacts__copy');

	//Показ/скрытие допольнительных кнопок регистрации
	$('.registration__showHidden').on('click', function() {
		$('.registration__buttonsHidden').slideDown(800);
		$(this).toggleClass('displayNone');
		$('.registration__showHidden_hide').toggleClass('displayNone');
	});

	$('.registration__showHidden_hide').on('click', function() {
		$('.registration__buttonsHidden').slideUp(800);
		$(this).toggleClass('displayNone');
		$('.registration__showHidden_show').toggleClass('displayNone');
	});

	//Добавление пункта в список желаний
	listenerWishAdd();
	listenerWishRemove();
	listenerWishDone();
	function listenerWishAdd(){
		$('.wishList__button').click(function (){
			var valueWish = $('.wishList__input').val();
			if(!valueWish){
				alert('Dont forget to add wish!');
				return false;
			}
			var addedWish = '<div class="wishList__wish"> <strong>' + valueWish + '</strong> <div> <button class="wishList__wish-button wishList__wish-button_done"></button><button class="wishList__wish-button wishList__wish-button_delete"> </button> </div> </div>';
			$('.wishList_list').append(addedWish);
			$('.wishList__input').val('');
			listenerWishRemove();
			listenerWishDone();
		});
	}

	function listenerWishRemove(){
		$('.wishList__wish-button_delete').click(function(){
			$(this).parents('.wishList__wish').remove();
		});
	}

	function listenerWishDone(){
		$('.wishList__wish-button_done').click(function(){
			$(this).parents('.wishList__wish').children('strong').toggleClass('wishDone');
		});
	}


});
