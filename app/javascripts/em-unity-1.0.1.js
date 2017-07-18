/**
 * Accordion Activation
 * 1) Add closed class to all accordion items by default
 * 2) Add and remove active class to tabs depending on which one you click on
 * 3) Add the id to the URL
 */
$(document).ready(function (){

    (function () {

        
	var accordionItem = document.querySelectorAll('.em-js-accordion-item');
	var accordionBtn = document.querySelectorAll('.em-js-accordion-trigger');
	var accordionContent = document.querySelectorAll('.em-js-accordion-panel');

	for (i=0; i<accordionItem.length; i++) {
		accordionItem[i].classList.add('em-is-closed'); /* 1 */
	}

	for (i=0; i<accordionBtn.length; i++) {
		accordionBtn[i].addEventListener('click',function(e){
			e.preventDefault();
			var parent = this.parentNode.parentNode;
			var thisHref = this.getAttribute('href');
			var thisHrefSub = this.getAttribute('href').substring(1);

			toggleAccordion(parent);
		});
	}

	function toggleAccordion(el) {

		if(el.classList.contains('em-is-closed')) {
			el.classList.remove('em-is-closed'); /* 2 */
		}
		else {
			el.classList.add('em-is-closed'); /* 2 */
		}
	}

})();
;var alertTriggers = document.querySelectorAll('.em-js-alert-dismiss-trigger');

//Add click event for each carousel link
for (i=0; i<alertTriggers.length; i++) {
	alertTriggers[i].addEventListener('click', function(event) {
		event.preventDefault();

		this.closest('.em-js-alert').remove();
	});
}
;/**
 * Alphabet Filter Activation
 * 1) Add and remove active class to current alphabet filter item depending on which one you click on
 */
(function(){
	var alphabet = document.querySelectorAll('.em-js-alphabet');
	for (i=0; i<alphabet.length; i++) {
		alphabet[i].addEventListener('click', function (e) {
			if (this.classList.contains('em-is-active')) {
				this.classList.remove('em-is-active');
			}
			else {
				for(j=0; j<alphabet.length; j++) {
					alphabet[j].classList.remove('em-is-active');
				}
				this.classList.add('em-is-active');
			}

		});
	}
})();
;/**
 * Add Body Classes
 * 1) Modernizr-type class used by all styles that are JS dependent.
 */
(function(){
   document.body.classList.add('em-js');
})();
;/**
 * Add Button Bar Button Active State
 * 1) When clicking on a button within button bar, the class of em-is-active is added and removed
 *    Each button toggles itself so multiple buttons can be active.
 */

(function(){
	var button = document.querySelectorAll('.em-js-btn-selectable');
	for (i=0; i<button.length; i++) {
		button[i].addEventListener('click', function (e) {
			if (this.classList.contains('em-is-active')) {
				this.classList.remove('em-is-active');
			}
			else {
				this.classList.add('em-is-active');
			}
		});
	}

})();
;/**
 * Checkbox Field Options List Item Activation
 * 1) Add active class to any inputs that are initially checked
 * 2) Add and remove active class depending on whether input is checked or not
 * 3) Active class can apply to multiple option list items
 */
(function(){
	var checkboxTrigger = document.querySelectorAll('.em-js-checkbox-trigger');
	var checkboxChecked = document.querySelectorAll('.em-js-checkbox-trigger:checked');

	for (i=0; i<checkboxChecked.length; i++) {
		var checkboxParent = checkboxChecked[i].parentNode.parentNode;
		checkboxParent.classList.add('em-is-active');
	}

	for(i=0; i<checkboxTrigger.length; i++) {
		checkboxTrigger[i].addEventListener('change',function(){
			console.log(this);
			var checkboxTriggerParent = this.parentNode.parentNode;
			if(checkboxTriggerParent.classList.contains('em-is-active')) {
				checkboxTriggerParent.classList.remove('em-is-active');
			}
			else {
				checkboxTriggerParent.classList.add('em-is-active');
			}
		});
	}
})();
;/**
 * Click Outside Elements
 * 1) Certain elements need closed when any area not in the element itself is clicked
 * 2) See: http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element
 */
(function(){
	$(document).click(function(event) {
		var clickableElements = ".em-js-nav-dropdown, .em-js-nav-dropdown-trigger, .em-js-dropdown-check, .em-js-dropdown-trigger:not(.em-js-show-hide-trigger), .em-js-dropdown"; /* 1 */

		if(!$(event.target).is(clickableElements) && !$(event.target).parents(clickableElements).is(clickableElements)) {
			$(clickableElements).removeClass('em-is-active');
		}
	});
	$(document).on("tap",function(event) {
		var tappableElements = ".em-js-nav-dropdown, .em-js-nav-dropdown-trigger, .em-js-dropdown-check, .em-js-dropdown-trigger, .em-js-dropdown"; /* 1 */

		if(!$(event.target).is(tappableElements) && !$(event.target).parents(tappableElements).is(tappableElements)) {
			$(tappableElements).removeClass('em-is-active');
		}
	});
})();
;/**
* Collapsible Table Rows
* 1) On click of a table row trigger, open the hidden table rows below it.
* 2) While the parent has a next sibling and the parent doesn't have em-js-table-row-parent, add visible and open classes
*/

(function(){
    var collapseTrigger = document.querySelectorAll('.em-js-collapse-trigger');
    var collapseRows = document.querySelectorAll('.em-js-table-row-collapsible');

    for (i=0; i<collapseTrigger.length; i++) {

        collapseTrigger[i].addEventListener('click', function (e) {
            e.preventDefault();

            var thisParent = this.parentNode;
            var collapseTriggers = document.querySelectorAll
            var next = [];

            while (thisParent.nextElementSibling && !thisParent.nextElementSibling.matches('.em-js-table-row-parent')) {
                next.push(thisParent = thisParent.nextElementSibling);
                if (thisParent.classList.contains('em-is-visible')) {
                    this.classList.remove('em-is-open'); /* 2 */
                    thisParent.classList.remove('em-is-visible'); /* 2 */
                }
                else  {
                    this.classList.add('em-is-open'); /* 2 */
                    thisParent.classList.add('em-is-visible'); /* 2 */
                }
            }
        });
    }
})();
;/**
 * Collapsible toolbar
 * Adds active class to toolbar trigger and collapsible toolbar parent when clicked on.
 * Removes active class from toolbar trigger and collapsible toolbar parent when clicked on again.
 */

(function(){

	var toolbarTrigger = document.querySelectorAll('.em-js-toolbar-trigger');
	var toolbarPanel = document.querySelectorAll('.em-js-collapsible-toolbar');

	for (i=0; i<toolbarTrigger.length; i++) {

		toolbarTrigger[i].addEventListener('click', function (e) {
		e.preventDefault();

			if (this.parentElement.classList.contains('em-is-active')) {

				this.classList.remove('em-is-active');
				this.parentElement.classList.remove('em-is-active');
			}
			else {
				for (j=0; j<toolbarPanel.length; j++) {
					toolbarPanel[j].classList.remove('em-is-active');
					toolbarTrigger[j].classList.remove('em-is-active');
					this.classList.remove('em-is-active');
				}
				this.classList.add('em-is-active');
				this.parentElement.classList.add('em-is-active');
			}

		});
	}
})();
;/**
 * Dropdown check
 * Adds active class to dropdown trigger and dropdown check parent when clicked on.
 * Removes active class from dropdown trigger and dropdown check parent when clicked on again.
 */

(function(){

	var dropdownTrigger = document.querySelectorAll('.em-js-dropdown-trigger');
	var dropdownPanel = document.querySelectorAll('.em-js-dropdown-check');

	for (i=0; i<dropdownTrigger.length; i++) {

		dropdownTrigger[i].addEventListener('click', function (e) {
		e.preventDefault();

			if (this.parentElement.classList.contains('em-is-active')) {

				this.classList.remove('em-is-active');
				this.parentElement.classList.remove('em-is-active');
			}
			else {
				for (j=0; j<dropdownPanel.length; j++) {
					dropdownPanel[j].classList.remove('em-is-active');
					dropdownTrigger[j].classList.remove('em-is-active');
					this.classList.remove('em-is-active');
				}
				this.classList.add('em-is-active');
				this.parentElement.classList.add('em-is-active');
			}

		});
	}
})();
;/**
 * File Upload
 * 1) Run this function every time you browse the file upload
 * 2) Remove previous file upload list items for every file upload
 * 3) Replace empty list with new files if there are files
 * 4) Get rid of upload files if cancel button is hit and replace with message to upload files
 */

(function(){

	var fileUpload = document.querySelectorAll('.em-c-field--file-upload');

	for (i=0; i<fileUpload.length; i++) {
		fileUpload[i].addEventListener("change", function(e) { /* 1 */
			var input = this.querySelector('.em-c-file-upload');
			var list = this.querySelector('.em-js-field-list');
			var listItems = this.querySelectorAll('.em-js-field-item');
			console.log(input.files);
			if (input.files.length > 0) {
				for (j=0; j<listItems.length; j++) {
					list.removeChild(listItems[j]); /* 2 */
				}

				for (k=0; k<input.files.length; k++) {
					var listItem = document.createElement('li');
					listItem.classList.add('em-js-field-item'); /* 3 */
					listItem.innerHTML = 'File ' + (k + 1) + ':  ' + input.files[k].name; /* 3 */
					list.appendChild(listItem); /* 3 */
				}
			}
			else {
				list.innerHTML = "";
				var listItem = document.createElement('li');
				listItem.classList.add('em-js-field-item'); /* 3 */
				listItem.innerHTML = 'Choose files to upload'; /* 3 */
				list.appendChild(listItem); /* 3 */
			}
		});
	};

})();
;/**
 * Hidden Utility
 * 1) Add class of em-u-is-hidden on load to any component with em-js-hidden as a class
 * 2) This hides element when JS is working. Shows element when JS is not working.
 */

(function(){

	var hiddenElement = document.querySelectorAll('.em-js-hidden');

	for (i=0; i<hiddenElement.length; i++) {
		hiddenElement[i].classList.add('em-u-is-hidden');/* 1 */
	}

})();
;(function() {

	var icons = document.querySelectorAll('.em-js-icon');

	for (i=0; i<icons.length; i++) {
		var iconPath = icons[i].getAttribute('data-icon');

		var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
		svg.setAttribute("class", "em-c-icon");

		var use = document.createElementNS("http://www.w3.org/2000/svg","use");
		use.setAttributeNS("http://www.w3.org/1999/xlink", "href",iconPath);
		svg.appendChild(use);

		icons[i].parentNode.replaceChild(svg, icons[i]);
	}
})();
;/**
 * Infinite scroll functionality
 */
(function(){

	/**
	 * Boolean to check if window scrolled
	 */
	var didScroll = false;

	/**
	 * First item that has infinite scroll that hasn't already been loaded
	 */
	var infiniteScrollItem = document.querySelector('.em-js-infinite-scroll.em-is-loading');

	/**
	 * Lazy Load Threshold
	 *  1) How many pixels between the item to be lazy loaded and the viewport bottom
	 */
	var lazyLoadThreshold = 600;

	/**
	 * Return if no infiniteScrollItem are found
	 */
	if(!infiniteScrollItem) {
		return;
	}

	/**
	 * Add scroll event
	 */
	window.addEventListener('scroll', function() {
		didScroll = true;
	});

	/**
	 * setInterval to prevent scroll event from over-firing.
	 * 1) See http://ejohn.org/blog/learning-from-twitter/
	 */
	setInterval(function() {
		if ( didScroll ) {
			didScroll = false;
			detectInfiniteScroll();
		}
	}, 250);

	/**
	 * Detect infinite scroll
	 * 1) Get item position and load content if within viewport threshold
	 */
	function detectInfiniteScroll() {
		infiniteScrollItem = document.querySelector('.em-js-infinite-scroll.em-is-loading');

		if(!infiniteScrollItem) { return; }

		var yPos = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var windowHeight = window.innerHeight;
        var windowBottom = yPos + windowHeight;
		var url = infiniteScrollItem.getAttribute('data-url');
		var itemTop = infiniteScrollItem.offsetTop;
		var lazyLoadTriggerValue = itemTop - lazyLoadThreshold;

		/**
		 * 1) Check to see if item is within the lazy load threshold
		 * 2) If it is, load the appropriate element
		 */
		if (windowBottom >= lazyLoadTriggerValue) {
			loadItemUrl(infiniteScrollItem,url);
		}
	}


	//Load appropriate infinite scroll item
	function loadItemUrl(el,url) {

		//Make AJAX request for item's URL
		getCORS(url, function(request){
		    var response = request.currentTarget.response || request.target.responseText;
			el.innerHTML = response;
			el.classList.remove('em-is-loading');
		});
	}

	//AJAX function
	function getCORS(url, success) {
	    var xhr = new XMLHttpRequest();
	    xhr.open('GET', url);
	    xhr.onload = success;
	    xhr.send();
	    return xhr;
	}
})();
;/**
 * Modal
 * 1) Adds active class to em-js-modal when the Modal's id = em-c-stacked-block__title's href
 * 2) Removes active class from em-js-modal when "close" button is clicked
 * 3) Removes active class from em-js-modal when area around modal window is clicked
 * 4) Removes the hash and href on close
 */

(function(){

	var modalTrigger = document.querySelectorAll('.em-js-modal-trigger');
	var modalPanel = document.querySelectorAll('.em-js-modal');

	for (i=0; i<modalPanel.length; i++) {
		modalPanel[i].setAttribute('aria-hidden', 'true');
		modalPanel[i].setAttribute('tabindex', '-1');
	}

	for (i=0; i<modalTrigger.length; i++) {
		modalTrigger[i].addEventListener('click', function (e) {
			var origModalTrigger = this;
			var modalLink = this.getAttribute('href'); /* 1 */
			for (j=0; j<modalPanel.length; j++) { /* 1 */
				var modalID = modalPanel[j].getAttribute('id'); /* 1 */
				var modalElement = document.getElementById(modalID); /* 1 */

			 	if (("#"+modalID) == modalLink) {
					modalElement.classList.remove('em-is-closed'); /* 1 */
					document.body.classList.add('em-is-disabled');
					modalElement.setAttribute('tabindex', '0');
					modalElement.setAttribute('aria-hidden', 'false');
				}

				var modalActivePanel = document.querySelector('.em-js-modal:not(.em-is-closed)'); /* 2 */
				var modalCloseTrigger = document.querySelectorAll('.em-js-modal-close-trigger'); /* 2 */

				modalCloseTrigger[j].addEventListener('click', function (e) {
					modalActivePanel.classList.add('em-is-closed'); /* 2 */
					document.body.classList.remove('em-is-disabled');
					modalActivePanel.setAttribute('tabindex', '-1');
					origModalTrigger.focus();
					window.location.replace("#"); /* 4 */
					if (typeof window.history.replaceState == 'function') { /* 4 */
						history.replaceState({}, '', window.location.href.slice(0, -1)); /* 4 */
					}
				});

				var modalWindow = modalPanel[j].getElementsByClassName('em-js-modal-window');/* 3 */

				modalPanel[j].addEventListener('click', function(e) { /* 3 */
				    if(e.target == modalActivePanel ) {
						modalActivePanel.classList.add('em-is-closed'); /* 3 */
						document.body.classList.remove('em-is-disabled');
						modalActivePanel.setAttribute('aria-hidden', 'true');/* 3 */
						modalActivePanel.setAttribute('tabindex', '-1');
						origModalTrigger.focus();
						window.location.replace("#"); /* 4 */
						if (typeof window.history.replaceState == 'function') { /* 4 */
							history.replaceState({}, '', window.location.href.slice(0, -1)); /* 4 */
						}
				    }
				});
				document.addEventListener('keyup', function(e) {
				    if (e.keyCode == 27) {
						modalActivePanel.classList.add('em-is-closed'); /* 3 */
						document.body.classList.remove('em-is-disabled');
						modalActivePanel.setAttribute('aria-hidden', 'true');
						modalActivePanel.setAttribute('tabindex', '-1');
						origModalTrigger.focus();
						window.location.replace("#"); /* 4 */
						if (typeof window.history.replaceState == 'function') { /* 4 */
							history.replaceState({}, '', window.location.href.slice(0, -1)); /* 4 */
						}
				    }
				});
			}
		});
	}

	/**
	 * Modal Automatically Opened (Not Toggled With Trigger)
	 * 2) Removes modal when "close" button is clicked
	 * 3) Removes modal when area around modal window is clicked
	 */

	var modalOnly = document.querySelector('.em-js-modal-only'); /* 2 */
	var modalOnlyCloseTrigger = document.querySelector('.em-js-modal-only .em-js-modal-close-trigger'); /* 2 */
	if (modalOnly) {
		modalOnly.setAttribute('aria-hidden', 'false');
		modalOnly.setAttribute('tab-index', '0');
		modalOnlyCloseTrigger.addEventListener('click', function (e) {
			var modalParent = modalOnly.parentNode;
			modalParent.removeChild(modalOnly);
		});
		modalOnly.addEventListener('click', function(e) { /* 3 */
			if(e.target == modalOnly ) {
				var modalParent = modalOnly.parentNode;
				modalParent.removeChild(modalOnly);
			}
		});
		document.addEventListener('keyup', function(e) {
		    if (e.keyCode == 27) {
				console.log('test');
				var modalParent = modalOnly.parentNode;
				modalParent.removeChild(modalOnly);
		    }
		});
	}
	else {
		return;
	}
})();
;/**
 * Primary Navigation Toggle
 * 1) Add and remove active class (em-is-active) of .em-js-nav-panel with click of the .em-js-nav-trigger
 */
(function(){
	var $menuButton = $('.em-js-nav-trigger');

    $menuButton.on('click', function (e) {
		e.preventDefault();
        var $buttonLabel = $(this).find('.em-js-btn-label');
        var buttonText = $buttonLabel.text();
        var buttonCloseText = $buttonLabel.attr('data-em-btn-toggle-text');
		var $buttonSwap = $(this).find('.em-js-btn-swap-icon');
		var iconPath = $(this).find('.em-js-btn-icon').attr('data-em-icon-path');

        if(buttonText == "Close") {
            $buttonLabel.text('Menu');
            $(this).find('.em-js-btn-icon').removeClass('em-u-is-hidden');
			$buttonSwap.addClass('em-u-is-hidden');
        } else {
            $buttonLabel.text('Close');
            $(this).find('.em-js-btn-icon').addClass('em-u-is-hidden');
			$buttonSwap.removeClass('em-u-is-hidden');
        }

		$(this).toggleClass('em-is-active');
		$('.em-js-header').toggleClass('em-is-active');
		$('body').toggleClass('em-is-disabled-small');
		$('.em-js-nav-panel').toggleClass('em-is-active');
	});

    /**
     * Search Icon Button Trigger
     * 1) Toggles the header search form
     */
	$('.em-js-header-search-trigger').on('click',function(e) {
		var $buttonSwap = $(this).find('.em-js-btn-swap-icon');
		var iconPath = $('.em-js-btn-icon').attr('data-em-icon-path');

        if($(this).hasClass('em-is-active')) {
            $(this).removeClass('em-is-active');
            $(this).find('.em-js-btn-icon').removeClass('em-u-is-hidden');
			$buttonSwap.addClass('em-u-is-hidden');
        } else {
            $(this).addClass('em-is-active');
			$(this).find('.em-js-btn-icon').addClass('em-u-is-hidden');
			$buttonSwap.removeClass('em-u-is-hidden');
            var intervalID = setTimeout(function() { $('.em-js-header-search').find('input[type=search]').focus(); }, 50);
        }

		$('.em-js-header-search').toggleClass('em-is-active');
		$('.em-js-nav-dropdown').removeClass('em-is-active');
		$('.em-js-nav-dropdown-trigger').removeClass('em-is-active')
	});

    /**
     * First Level Tree Navigation Dropdown Toggle
     * 1) Add and remove active class (em-is-active) of .em-js-tree-dropdown and .em-js-tree-dropdown-trigger with click of the .em-js-tree-dropdown-trigger
     */
	var $dropdownTrigger = $('.em-js-nav-dropdown-trigger');

    $dropdownTrigger.on('click',function(e) {
		e.preventDefault();

        //Hide
        if($(this).hasClass('em-is-active')) {
            $(this).removeClass('em-is-active').attr('aria-expanded','false').attr('aria-selected','false');

            $(this).next('.em-js-nav-dropdown').removeClass('em-is-active').attr('aria-hidden','true').attr('aria-selected','false');

        // Show
        } else {
			$dropdownTrigger.removeClass('em-is-active').attr('aria-expanded','false').attr('aria-selected','false');
			$('.em-js-nav-dropdown').removeClass('em-is-active').attr('aria-hidden','true').attr('aria-selected','false');

            $(this).addClass('em-is-active').attr('aria-expanded','true').attr('aria-selected','true');

            $(this).next('.em-js-nav-dropdown').addClass('em-is-active').attr('aria-hidden','false').attr('aria-selected','true');
        }
	});

	var pgurl = window.location.href.replace(/^.*\/\/[^\/]+/, '');

    $(".em-c-primary-nav__link").each(function(){
        if($(this).attr("href") == pgurl || $(this).attr("href") == '' ) {
        	$(this).addClass('em-is-current');
        }
    })

})();
;/**
 * Radio Field Options List Item Activation
 * 1) Add active class to any inputs that are initially selected
 * 2) Add and remove active class of option list item depending on whether radio input is selected or not
 * 3) Active class can only apply to 1 option list item
 */
(function(){

	var radioTrigger = document.querySelectorAll('.em-js-radio-trigger');
	var radioChecked =  document.querySelectorAll('.em-js-radio-trigger:checked');

	for (i=0; i<radioChecked.length; i++) {
		var radioParent = radioChecked[i].parentNode.parentNode;
		radioParent.classList.add('em-is-active'); /* 1 */
	}

	for(i=0; i<radioTrigger.length; i++) {

		radioTrigger[i].addEventListener('click',function(){
			var radioList = this.parentNode.parentNode.parentNode;
			var radioTriggerParent = radioList.querySelectorAll('.em-js-radio-trigger-parent');

			for (j=0; j<radioTriggerParent.length; j++) {
				radioTriggerParent[j].classList.remove('em-is-active'); /* 2 */
			}
			
			var radioTriggerParent = this.parentNode.parentNode;
			radioTriggerParent.classList.add('em-is-active'); /* 2 */
		});
	}

})();
;/**
 * Select Panel Navigation
 * 1) Add active class to the first tab and panel by default
 * 2) On click of new select item, remove all panel's active classes before adding class on related panel
 * 3) Get selected value from select menu and show panel that has the same ID as select value
 */

(function(){

	var panelContainer = document.querySelectorAll('.em-c-select-panel__body');
	var panelTrigger = document.querySelectorAll('.em-js-select-panel-trigger');

	var tabBtn = document.querySelectorAll('.em-js-tab');
	var tabContent = document.querySelectorAll('.em-js-tabs-panel');

	for (i=0; i<panelContainer.length; i++) {
		var panelFirst = panelContainer[i].querySelector('.em-js-select-panel-panel:first-child');
		panelFirst.classList.add('em-is-active'); /* 1 */
	}

	for (i=0; i<panelTrigger.length; i++) {
		panelTrigger[i].addEventListener('change',function(){
			var panelPanel = document.querySelectorAll('.em-js-select-panel-panel');
			for (j=0; j<panelPanel.length; j++) {
				panelPanel[j].classList.remove('em-is-active'); /* 2 */
			}
			var selectedOption = this.options[this.selectedIndex].value; /* 3 */
			var selectedPanel = document.getElementById(selectedOption); /* 3 */
			selectedPanel.classList.add('em-is-active'); /* 3 */
		});
	}

})();
;/**
 * Show/Hide
 * 1) Clicking a trigger toggles the visibility of the target and changes the trigger's label
 */

 (function (document, window, undefined) {
   'use strict';

   // Triggers
   var triggers = document.querySelectorAll('.em-js-show-hide-trigger');
   var targets = document.querySelectorAll('.em-js-show-hide-target');

   for (i=0; i<targets.length; i++) {
	   targets[i].classList.add('em-u-is-hidden');
   }

   for (i=0; i<triggers.length; i++) {
	   triggers[i].setAttribute('data-show-hide-initial-label',triggers[i].innerText);
   }

   var displayContent = function (trigger, target) {
     if (target.classList.contains('em-u-is-hidden')) {
		 // Show target
         target.classList.remove('em-u-is-hidden');
         trigger.setAttribute('aria-expanded', 'true');
         target.setAttribute('aria-hidden', 'false');
         var btnText = trigger.querySelector('.em-js-btn-text');
		 btnText.innerText = trigger.getAttribute('data-show-hide-label');
       } else {
		// Hide target
           target.classList.add('em-u-is-hidden');
           trigger.setAttribute('aria-expanded', 'false');
           target.setAttribute('aria-hidden', 'true');
           var btnText = trigger.querySelector('.em-js-btn-text');
		   btnText.innerText = trigger.getAttribute('data-show-hide-initial-label');
       }
   };

   [].forEach.call(triggers, function(trigger, index) {
     // Target var
     var target = trigger.nextElementSibling;

     // Set trigger attributes
     trigger.setAttribute('id', 'trigger-' + index);
     trigger.setAttribute('aria-expanded', 'false');
     trigger.setAttribute('aria-controls', 'content-' + index);

     // Set target attributes
     target.setAttribute('id', 'content-' + index);
     target.setAttribute('aria-hidden', 'true');
     target.setAttribute('aria-labelledby', 'trigger-' + index);

     trigger.addEventListener('click', function () {
       displayContent(this, target);
       return false;
     }, false);

     trigger.addEventListener('keydown', function (event) {
       // Handle 'space' key
       if (event.which === 32) {
         event.preventDefault();
         displayContent(this, target);
       }
     }, false);

   });

 })(document, window);
;/*!
 * Stickyfill -- `position: sticky` polyfill
 * v. 1.1.4 | https://github.com/wilddeer/stickyfill
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
!function(a,b){function c(){y=D=z=A=B=C=K}function d(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}function e(a){return parseFloat(a)||0}function f(){F={top:b.pageYOffset,left:b.pageXOffset}}function g(){return b.pageXOffset!=F.left?(f(),void z()):void(b.pageYOffset!=F.top&&(f(),i()))}function h(a){setTimeout(function(){b.pageYOffset!=F.top&&(F.top=b.pageYOffset,i())},0)}function i(){for(var a=H.length-1;a>=0;a--)j(H[a])}function j(a){if(a.inited){var b=F.top<=a.limit.start?0:F.top>=a.limit.end?2:1;a.mode!=b&&p(a,b)}}function k(){for(var a=H.length-1;a>=0;a--)if(H[a].inited){var b=Math.abs(t(H[a].clone)-H[a].docOffsetTop),c=Math.abs(H[a].parent.node.offsetHeight-H[a].parent.height);if(b>=2||c>=2)return!1}return!0}function l(a){isNaN(parseFloat(a.computed.top))||a.isCell||"none"==a.computed.display||(a.inited=!0,a.clone||q(a),"absolute"!=a.parent.computed.position&&"relative"!=a.parent.computed.position&&(a.parent.node.style.position="relative"),j(a),a.parent.height=a.parent.node.offsetHeight,a.docOffsetTop=t(a.clone))}function m(a){var b=!0;a.clone&&r(a),d(a.node.style,a.css);for(var c=H.length-1;c>=0;c--)if(H[c].node!==a.node&&H[c].parent.node===a.parent.node){b=!1;break}b&&(a.parent.node.style.position=a.parent.css.position),a.mode=-1}function n(){for(var a=H.length-1;a>=0;a--)l(H[a])}function o(){for(var a=H.length-1;a>=0;a--)m(H[a])}function p(a,b){var c=a.node.style;switch(b){case 0:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top=a.offset.top+"px",c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 1:c.position="fixed",c.left=a.box.left+"px",c.right=a.box.right+"px",c.top=a.css.top,c.bottom="auto",c.width="auto",c.marginLeft=0,c.marginRight=0,c.marginTop=0;break;case 2:c.position="absolute",c.left=a.offset.left+"px",c.right=a.offset.right+"px",c.top="auto",c.bottom=0,c.width="auto",c.marginLeft=0,c.marginRight=0}a.mode=b}function q(a){a.clone=document.createElement("div");var b=a.node.nextSibling||a.node,c=a.clone.style;c.height=a.height+"px",c.width=a.width+"px",c.marginTop=a.computed.marginTop,c.marginBottom=a.computed.marginBottom,c.marginLeft=a.computed.marginLeft,c.marginRight=a.computed.marginRight,c.padding=c.border=c.borderSpacing=0,c.fontSize="1em",c.position="static",c.cssFloat=a.computed.cssFloat,a.node.parentNode.insertBefore(a.clone,b)}function r(a){a.clone.parentNode.removeChild(a.clone),a.clone=void 0}function s(a){var b=getComputedStyle(a),c=a.parentNode,d=getComputedStyle(c),f=a.style.position;a.style.position="relative";var g={top:b.top,marginTop:b.marginTop,marginBottom:b.marginBottom,marginLeft:b.marginLeft,marginRight:b.marginRight,cssFloat:b.cssFloat,display:b.display},h={top:e(b.top),marginBottom:e(b.marginBottom),paddingLeft:e(b.paddingLeft),paddingRight:e(b.paddingRight),borderLeftWidth:e(b.borderLeftWidth),borderRightWidth:e(b.borderRightWidth)};a.style.position=f;var i={position:a.style.position,top:a.style.top,bottom:a.style.bottom,left:a.style.left,right:a.style.right,width:a.style.width,marginTop:a.style.marginTop,marginLeft:a.style.marginLeft,marginRight:a.style.marginRight},j=u(a),k=u(c),l={node:c,css:{position:c.style.position},computed:{position:d.position},numeric:{borderLeftWidth:e(d.borderLeftWidth),borderRightWidth:e(d.borderRightWidth),borderTopWidth:e(d.borderTopWidth),borderBottomWidth:e(d.borderBottomWidth)}},m={node:a,box:{left:j.win.left,right:J.clientWidth-j.win.right},offset:{top:j.win.top-k.win.top-l.numeric.borderTopWidth,left:j.win.left-k.win.left-l.numeric.borderLeftWidth,right:-j.win.right+k.win.right-l.numeric.borderRightWidth},css:i,isCell:"table-cell"==b.display,computed:g,numeric:h,width:j.win.right-j.win.left,height:j.win.bottom-j.win.top,mode:-1,inited:!1,parent:l,limit:{start:j.doc.top-h.top,end:k.doc.top+c.offsetHeight-l.numeric.borderBottomWidth-a.offsetHeight-h.top-h.marginBottom}};return m}function t(a){for(var b=0;a;)b+=a.offsetTop,a=a.offsetParent;return b}function u(a){var c=a.getBoundingClientRect();return{doc:{top:c.top+b.pageYOffset,left:c.left+b.pageXOffset},win:c}}function v(){G=setInterval(function(){!k()&&z()},500)}function w(){clearInterval(G)}function x(){I&&(document[L]?w():v())}function y(){I||(f(),n(),b.addEventListener("scroll",g),b.addEventListener("wheel",h),b.addEventListener("resize",z),b.addEventListener("orientationchange",z),a.addEventListener(M,x),v(),I=!0)}function z(){if(I){o();for(var a=H.length-1;a>=0;a--)H[a]=s(H[a].node);n()}}function A(){b.removeEventListener("scroll",g),b.removeEventListener("wheel",h),b.removeEventListener("resize",z),b.removeEventListener("orientationchange",z),a.removeEventListener(M,x),w(),I=!1}function B(){A(),o()}function C(){for(B();H.length;)H.pop()}function D(a){for(var b=H.length-1;b>=0;b--)if(H[b].node===a)return;var c=s(a);H.push(c),I?l(c):y()}function E(a){for(var b=H.length-1;b>=0;b--)H[b].node===a&&(m(H[b]),H.splice(b,1))}var F,G,H=[],I=!1,J=a.documentElement,K=function(){},L="hidden",M="visibilitychange";void 0!==a.webkitHidden&&(L="webkitHidden",M="webkitvisibilitychange"),b.getComputedStyle||c();for(var N=["","-webkit-","-moz-","-ms-"],O=document.createElement("div"),P=N.length-1;P>=0;P--){try{O.style.position=N[P]+"sticky"}catch(Q){}""!=O.style.position&&c()}f(),b.Stickyfill={stickies:H,add:D,remove:E,init:y,rebuild:z,pause:A,stop:B,kill:C}}(document,window),window.jQuery&&!function($){$.fn.Stickyfill=function(a){return this.each(function(){Stickyfill.add(this)}),this}}(window.jQuery);

/**
 * Sticky functionality
 * 1) The sticky functionality uses Stickyfill to provide sticky funcitonality
 *    for browsers that don't support `position: sticky`
 */

var stickyElements = document.getElementsByClassName('em-js-sticky');

for (var i = stickyElements.length - 1; i >= 0; i--) {
    Stickyfill.add(stickyElements[i]);
}
;/**
 * Table of Contents Functionality
 * 1) Builds a table of contents navigation and updates headings
 */
(function(){

	var toc = "";
    var level = 0;

	/**
	 * Boolean to check if window scrolled
	 */
	var didScroll = false;

	var headingOffsets = [];

	var tocBody = document.querySelector(".em-js-table-of-contents-body");

	if(!tocBody) {
		return;
	}

	/**
	 * Add anchors to headings and build Table of Contents nav
	 */
    document.querySelector(".em-js-table-of-contents-body").innerHTML =

		document.querySelector(".em-js-table-of-contents-body").innerHTML.replace(
            /<h([\d])>([^<]+)<\/h([\d])>/gi,

			function (str, openLevel, titleText, closeLevel) {
                if (openLevel != closeLevel) {
                    return str;
                }

                if (openLevel > level) {
                    toc += (new Array(openLevel - level + 1)).join("<ul class='em-c-tree__list--toc'>");
                } else if (openLevel < level) {
                    toc += (new Array(level - openLevel + 1)).join("</ul>");
                }

                level = parseInt(openLevel);

                var anchor = titleText.replace(/ /g, "_");
                toc += "<li class='em-c-tree__item'><a href=\"#" + anchor + "\" class='em-c-tree__link em-js-table-of-contents-item'>" + titleText
                    + "</a></li>";

                return "<h" + openLevel + " id=\"" + anchor + "\" class='em-js-table-of-contents-heading'>" + titleText + "</h" + closeLevel + ">";
            }
        );

    if (level) {
        toc += (new Array(level + 1)).join("</ul>");
    }

    var tocElement = document.querySelector(".em-js-table-of-contents");

    if(!tocElement) {
		return;
	}

    tocElement.innerHTML += toc;

	var tocElements = document.querySelectorAll('.em-js-table-of-contents-item');

	if(!tocElements) {
		return;
	}

	//Add click event for each carousel link
	for (i=0; i<tocElements.length; i++) {

		tocElements[i].addEventListener('click', function(event) {
			removeActiveLinks();
			this.classList.add('em-is-active');
	    });
	}

	//Remove active links from carousel links
	function removeActiveLinks() {
		for (i=0; i<tocElements.length; i++) {
			tocElements[i].classList.remove('em-is-active');
		}
	}

	/**
	 * Add window scroll event
	 */
	window.addEventListener('scroll', function() {
		didScroll = true;
	});

	/**
	 * setInterval to prevent scroll event from over-firing.
	 * 1) See http://ejohn.org/blog/learning-from-twitter/
	 */
	setInterval(function() {
		if ( didScroll ) {
			didScroll = false;
			checkCurrentHeading();
		}
	}, 250);

	function checkCurrentHeading() {
		var y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
		var closest = Number.MAX_VALUE, index = 0;

		var headings =  document.querySelectorAll(".em-js-table-of-contents-heading");

		for (i=0; i<headings.length; i++) {
			var offset = headings[i].offsetTop;
			headingOffsets.push(offset);
		}

		for (var i = 0, c = headingOffsets.length; i < c; i++) {
			var currentClosest = Math.abs(headingOffsets[i] - y);

			if (currentClosest < closest) {
				index = i;
				closest = currentClosest;

				updateHeading(i);
			}
		}
	}

	function updateHeading(index) {
		removeActiveLinks();
		tocElements[index].classList.add('em-is-active');
	}

	/**
	 * Check to see if element is in viewport
	 */
	function isElementInViewport (el) {
	    var rect = el.getBoundingClientRect();

	    return (
	        rect.top >= 0 &&
	        rect.left >= 0 &&
	        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
	        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
	    );
	}

	/**
	 * Table of Contents Scrolling
	 * Scrolls content to the anchor link gradually instead of going straight to the link
	 */

     'use strict';

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var gradualScroll = function (anchor, duration) {

            // Calculate how far and how fast to scroll
            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/16);
            var stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            // If scrolling down
            if ( increments >= 0 ) {
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            }
            // If scrolling up
            else {
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= (endLocation || 0) ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // Define smooth scroll links
        var scrollToggle = document.querySelectorAll('.em-js-table-of-contents-item');

        // For each smooth scroll link
        [].forEach.call(scrollToggle, function (toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    gradualScroll(dataTarget, dataSpeed || 500);
                }

            }, false);

        });

    }

})();
;/**
 * Table Active Rows Activation
 * 1) Add and remove active class to tabs depending on which one you click on
 * 2) Add the id to the URL
 * 3) Add active class to the first tab and panel by default
 */
(function(){

	var tableRow = document.querySelectorAll('.em-js-table-row-selectable');

	for (i=0; i<tableRow.length; i++) {

		tableRow[i].addEventListener('click', function (e) {

			if (this.classList.contains('em-is-active')) {
				this.classList.remove('em-is-active');
			}
			else {
				this.classList.add('em-is-active');
			}
			
		});
	}

})();
;/**
 * Tabs Activation
 * 1) Add active class to the first tab and panel by default
 * 2) Add and remove active class to tabs depending on which one you click on
 */

(function(){

	var tabContainer = document.querySelectorAll('.em-js-tabs');
	var tabBtn = document.querySelectorAll('.em-js-tab');
	var tabContent = document.querySelectorAll('.em-js-tabs-panel');

	for (i=0; i<tabContainer.length; i++) {
		var tabFirst = tabContainer[i].querySelector('.em-js-tab:first-child');
		var tabPanelFirst = tabContainer[i].querySelector('.em-js-tabs-panel:first-child');
		tabFirst.classList.add('em-is-active'); /* 1 */
		tabPanelFirst.classList.add('em-is-active'); /* 1 */
	}

	for (i=0; i<tabBtn.length; i++) {
		tabBtn[i].addEventListener('click', function (e) {
			e.preventDefault();
			openTab(this);
		});
	}

	function openTab(el) {
		thisHref = el.getAttribute('href');

		var tabParent = el.parentNode.parentNode.parentNode;
		var tabBtns = tabParent.querySelectorAll('.em-js-tab');

		for (j=0; j<tabBtns.length; j++) {
			tabBtns[j].classList.remove('em-is-active'); /* 2 */
		}

		el.classList.add('em-is-active'); /* 2 */

		var tabsPanel = tabParent.querySelectorAll('.em-js-tabs-panel');
		for (j=0; j<tabsPanel.length; j++) {
			tabsPanel[j].classList.remove('em-is-active'); /* 2 */
		}

		document.querySelector(thisHref).classList.add('em-is-active'); /* 2 */
	}


})();
;(function() {
	var tagsTrigger = document.querySelectorAll('.em-js-tags-trigger');
	var counter = 0;
	//Add click event for each carousel link
	for (j=0; j<tagsTrigger.length; j++) {
		tagsTrigger[j].addEventListener('click', function(event) {
			event.preventDefault();
			var parent = this.parentNode;
			var parentParents = parent.parentNode;
			var parentGrandparents = parentParents.parentNode;
			var parentGreatGrandparents = parentGrandparents.parentNode
			parentParents.removeChild(parent); //Regular remove() does not work in IE
			counter++;
			console.log(counter);
			if (counter == tagsTrigger.length) {
				parentGrandparents.removeChild(parentParents);
				parentGreatGrandparents.removeChild(parentGrandparents);
			}
		});
	}

})();
;/**
 * Tooltip set attributes
 * 1) Add aria hidden unless hovered or focused on
 * 2) Add tab index of 0 so tooltip can be activated when tabbed to
 * 3) Set aria-hidden to false on hover and true off of hover
 */

(function(){
	var tooltipTrigger = document.querySelectorAll('.em-js-tooltip-trigger');
	var tooltipPanel = document.querySelectorAll('.em-js-tooltip');

	for (i=0; i<tooltipPanel.length; i++) {
 	   tooltipPanel[i].setAttribute('tabindex', '0'); /* 2 */
	   tooltipPanel[i].setAttribute('role', 'tooltip');
    }

	for (i=0; i<tooltipTrigger.length; i++) {
	   tooltipTrigger[i].setAttribute('aria-hidden', 'true'); /* 1 */
	   tooltipTrigger[i].addEventListener("mouseover", function (e) {
			e.preventDefault();
			this.setAttribute('aria-hidden', 'false'); /* 3 */
		});
		tooltipTrigger[i].addEventListener("mouseout", function (e) {
		   e.preventDefault();
		   this.setAttribute('aria-hidden', 'true');/* 3 */
	   });
    }

})();
;(function(){
    /**
     * First Level Tree Navigation Dropdown Toggle
     * 1) Remove class of em-is-active of tree dropdown trigger and tree nav panel if tree dropdown trigger contains active class
	 * 2) Add class of em-is-active of tree dropdown trigger and tree nav panel if tree dropdown if tree dropdown does not contain active class
	 * 3) Add ARIA attributes showing hidden, selected, and expanded classes depending on whether the nav is active or not
	 */

	var treeTrigger = document.querySelectorAll('.em-js-tree-dropdown-trigger');
	for (i=0; i<treeTrigger.length; i++) {

		treeTrigger[i].addEventListener('click',function(e){

			e.preventDefault();

			var treePanel = this.nextElementSibling;

			if (this.classList.contains('em-is-active')) {
				this.classList.remove('em-is-active'); /* 1 */
				this.setAttribute("aria-expanded", "false"); /* 3 */
				this.setAttribute("aria-selected", "false"); /* 3 */
				treePanel.classList.remove('em-is-active'); /* 1 */
				treePanel.setAttribute('aria-hidden','true'); /* 3 */
				treePanel.setAttribute('aria-selected','false'); /* 3 */
			}
			else {

				this.classList.add('em-is-active'); /* 2 */
				this.setAttribute('aria-expanded', 'true'); /* 3 */
				this.setAttribute('aria-selected', 'true'); /* 3 */
				treePanel.classList.add('em-is-active'); /* 2 */
				treePanel.setAttribute('aria-hidden','false'); /* 3 */
				treePanel.setAttribute('aria-selected','true'); /* 3 */
			}
		});
	}
})();

});