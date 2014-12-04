$( document ).ready ( function () {
	var answer = "";
	var numberSequence = "";
	var cardNumber = 0;
	var numberShowTime = 500;
	var numberHideTime = 1000;	
	var correct = false;
	var numberSequenceLength = 4;

	var newNumberSequence = function (length) {
		sequence = "";
		for (var i = 0; i < length; i++) {
			sequence += Math.floor( Math.random() * 10 );		
		};
		return sequence;
	}

	numberSequence = newNumberSequence(4);

	console.log(numberSequence);
		
	var newCard = function () {
		if ( cardNumber >= numberSequenceLength ) {
			$( ".number-card" ).css("display", "none");
			$( ".answer-page" ).css("display", "block");
		} else {
			$( ".number-card" ).css("display", "block");
			$( ".number-card-number" ).html( numberSequence[cardNumber] );	
			cardNumber += 1; 
			setTimeout(hideCard, numberShowTime);
		}
	};

	var hideCard = function () {
		$( ".number-card" ).css("display", "none");
		setTimeout( newCard, numberHideTime);
	};


	newCard();	

	$( ".num-pad-number" ).click( function () {
		answer += this.id;
		$( ".answer" ).val( answer );
	});


	$( ".backspace" ).click( function () {
		answer = answer.slice( 0, answer.length - 1 )
		$( ".answer" ).val( answer );
	});


	$( ".submit" ).click( function () {
		correct = answer === numberSequence;
		console.log(correct);
		$( ".answer-page" ).css("display", "none");
		$( ".results-page" ).css("display", "block");
		if (correct) {
			$( ".results" ).html( "CORRECT!" );
		} else {
			$( ".results" ).html( "Nope!" );
		}
	});

	$( ".next-button" ).click( function () {
		numberSequence = newNumberSequence(4);
		$( ".results-page" ).css("display", "none");
		$( ".number-card" ).css("display", "block");
		$( ".answer" ).val( "" );
		cardNumber = 0;
		answer = "";
		newCard();
	});

});
