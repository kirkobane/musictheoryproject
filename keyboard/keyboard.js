function reset(){
		$(".blackKey").css("background-color","black")
		$(".whiteKey").css("background-color","white")
		$(".blackKeySpace").css("background-color","white")
		notArr=[]
		stArr=[]
		$(".vomit").empty()
	}

	function displayVals() {
	  var rootNote = $( "#rootnoteselect" ).val().toString();
	  console.log(rootNote)
	noteSearch([rootNote])
		var chordType= $("#chordtypeselect").val();
	 func= chordType + "(rootNote)"

	  eval(func)
	 
	}



	stArr=[]
function noteSearch(arr){

	$('.vomit').empty()

		$('.vomit').html(function(){
			//console.log(stArr)
			
				stArr.push(notes.indexOf(arr[arr.length-1]))

				console.log(stArr)
			
			

			$(this).append("<br> <h3>scales featuring</h3> ")

			for(h=0;h<arr.length;h++){
					temp=[arr[h]].toString()			
				$(this).append("<strong>"+temp.toUpperCase()+"</strong> ")
			}
			$(this).append("<br>")
			for(i=0;i<notes.length;i++){
				$(this).append("<br> <strong> <span class='keyroot'>"+notes[i].toUpperCase()+":</span></strong> ")
				for(k=0;k<scale.length;k++){
					bigArr=[]
					ScaleReader(k,i,arr,stArr)
					//console.log(bigArr)
				}$(this).append("<br>")
			}
		})
	}
function chordNoteSearch(arr){
	var i=0
	
	var rootNote=arr[0].toUpperCase()
	var chordFunctions=[Maj(arr[i]),Min(arr[i]),
					Maj7(arr[i]),Min7(arr[i])]

	var chordObj = [
				{name:"Major",func:Maj(arr[i])},
				{name:"Minor",func:Min(arr[i])},
				{name:"Major 7",func:Maj7(arr[i])},
				{name:"Minor 7",func:Min7(arr[i])},
				{name:"Augmented",func:AugTri(arr[i])},
				{name:"Diminished",func:DimTri(arr[i])},
				{name:"5 Power Chord",func:fiveDyad(arr[i])}
				]
	console.log(chordObj.length)

	function print(){
		for(j=0;j<chordObj.length;j++){
			preArr=chordObj[j].func
			thisArr=[]
				console.log(preArr.length)
			//function(){
				for(x=0;x<preArr.length;x++){
					if(preArr[x][1]=="s"){			
						thisArr.push(preArr[x][0]+"#")
					}else{
						thisArr.push(preArr[x])
					}
				}
			//}

			$(".chordvomit").append("<p>"+rootNote+" "+ chordObj[j].name +" "+ thisArr+"</p>")
			console.log(chordObj[j].name+ thisArr +thisArr.length)

		}
	}
	print()
}


$(document).ready(function() {

	notArr=[]
	//noteSearch(notArr)

	$( "select" ).change( displayVals );
	
	$(".whiteKey,.blackKey").click(function(){
		$(this).css("background-color","yellow")
		var pianoPress= $(this).text()
		console.log(pianoPress)
		var pianoKey = null
		
		if( pianoPress[1]=="#"){
			pianoKey= pianoPress[0].toLowerCase()+"s"
			notArr.push(pianoKey)
			console.log(notArr[notArr.length-1])
			
		}else{
			pianoKey= pianoPress[0].toLowerCase()
			notArr.push(pianoKey)
			
		}
		
			
			noteSearch(notArr)
			chordNoteSearch(notArr)
		

	})
		

	$('.Minor').click(function(){
		reset()
		

		n= $(this).text().toLowerCase()

		console.log(n)
		
		name= "."+ n+"Minor"

		
		
		
		$(".Chordname").html(
			n+ " Minor")

		for(i=0;i<Min(n).length;i++){
			clsnm= "."+Min(n)[i]+"note"
			console.log(clsnm)
			//$('.low'+Maj(n)[i].toUpperCase()+'Disp').show()
			//$('.high'+Maj(n)[i].toUpperCase()+'Disp').show()
			if(i==0){
				$(clsnm).css("background-color","red");
			}else if(i==1){

				$(clsnm).css("background-color","yellow")

			}else if(i>1){
				$(clsnm).css("background-color","orange")
			}
			

		}

		

		console.log(name)
	})		

	$('.Major').click(function(){
		reset()
		

		n= $(this).text().toLowerCase()

		console.log(n)
		
		name= "."+ n+"Major"

		
		
		
		$(".Chordname").html(
			n+ " Major")

		for(i=0;i<Maj(n).length;i++){
			clsnm= "."+Maj(n)[i]+"note"
			console.log(clsnm)
			//$('.low'+Maj(n)[i].toUpperCase()+'Disp').show()
			//$('.high'+Maj(n)[i].toUpperCase()+'Disp').show()
			if(i>0){
				$(clsnm).css("background-color","orange");
			}else{
				$(clsnm).css("background-color","red")


			}
			

		}

		

		console.log(name)
	})

	$('.reset').click(function(){reset()})


	// white keys

    $('.lowC').hover(function(){
				$('.lowCDisp').show();
			},function(){
				$('.lowCDisp').hide();
				});

   $('.lowD').hover(function(){
				$('.lowDDisp').show();
			},function(){
				$('.lowDDisp').hide();
				});

    $('.lowE').hover(function(){
				$('.lowEDisp').show();
			},function(){
				$('.lowEDisp').hide();
				});

    $('.lowF').hover(function(){
				$('.lowFDisp').show();
			},function(){
				$('.lowFDisp').hide();
				});


     $('.lowG').hover(function(){
				$('.lowGDisp').show();
			},function(){
				$('.lowGDisp').hide();
				});

     $('.lowA').hover(function(){
				$('.lowADisp').show();
			},function(){
				$('.lowADisp').hide();
				});

     $('.lowB').hover(function(){
				$('.lowBDisp').show();
			},function(){
				$('.lowBDisp').hide();
				});

     $('.midC').hover(function(){
				$('.midCDisp').show();
			},function(){
				$('.midCDisp').hide();
				});

     $('.highD').hover(function(){
				$('.highDDisp').show();
			},function(){
				$('.highDDisp').hide();
				});

     $('.highE').hover(function(){
				$('.highEDisp').show();
			},function(){
				$('.highEDisp').hide();
				});

     $('.highF').hover(function(){
				$('.highFDisp').show();
			},function(){
				$('.highFDisp').hide();
				});

     $('.highG').hover(function(){
				$('.highGDisp').show();
			},function(){
				$('.highGDisp').hide();
				});

     $('.highA').hover(function(){
				$('.highADisp').show();
			},function(){
				$('.highADisp').hide();
				});

     $('.highB').hover(function(){
				$('.highBDisp').show();
			},function(){
				$('.highBDisp').hide();
				});


     // black keys

     $('.lowCSharp').hover(function(){
				$('.lowCSharpDisp').show();
			},function(){
				$('.lowCSharpDisp').hide();
				});


      $('.lowDSharp').hover(function(){
				$('.lowDSharpDisp').show();
			},function(){
				$('.lowDSharpDisp').hide();
				});

      $('.lowFSharp').hover(function(){
				$('.lowFSharpDisp').show();
			},function(){
				$('.lowFSharpDisp').hide();
				});

      $('.lowGSharp').hover(function(){
				$('.lowGSharpDisp').show();
			},function(){
				$('.lowGSharpDisp').hide();
				});

      $('.lowASharp').hover(function(){
				$('.lowASharpDisp').show();
			},function(){
				$('.lowASharpDisp').hide();
				});

      $('.midCSharp').hover(function(){
				$('.midCSharpDisp').show();
			},function(){
				$('.midCSharpDisp').hide();
				});


      $('.highDSharp').hover(function(){
				$('.highDSharpDisp').show();
			},function(){
				$('.highDSharpDisp').hide();
				});

      $('.highFSharp').hover(function(){
				$('.highFSharpDisp').show();
			},function(){
				$('.highFSharpDisp').hide();
				});

      $('.highGSharp').hover(function(){
				$('.highGSharpDisp').show();
			},function(){
				$('.highGSharpDisp').hide();
				});

      $('.highASharp').hover(function(){
				$('.highASharpDisp').show();
			},function(){
				$('.highASharpDisp').hide();
				});

      // dropdown

      $(".dropdown-toggle").dropdown("toggle");



      // chords

      $('.cChord').hover(function(){
				$('.lowCDisp').show();
				$('.lowEDisp').show();
				$('.lowGDisp').show();
				$('.midCDisp').show();
				$('.highEDisp').show();
				$('.highGDisp').show();

			},function(){
				$('.lowCDisp').hide();
				$('.lowEDisp').hide();
				$('.lowGDisp').hide();
				$('.midCDisp').hide();
				$('.highEDisp').hide();
				$('.highGDisp').hide();
				});

      $('.dChord').hover(function(){
				$('.lowDDisp').show();
				$('.lowFSharpDisp').show();
				$('.lowADisp').show();
				$('.highDDisp').show();
				$('.highFSharpDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowDDisp').hide();
				$('.lowFSharpDisp').hide();
				$('.lowADisp').hide();
				$('.highDDisp').hide();
				$('.highFSharpDisp').hide();
				$('.highADisp').hide();
				});

       $('.eChord').hover(function(){
				$('.lowEDisp').show();
				$('.lowGSharpDisp').show();
				$('.lowBDisp').show();
				$('.highEDisp').show();
				$('.highGSharpDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowEDisp').hide();
				$('.lowGSharpDisp').hide();
				$('.lowBDisp').hide();
				$('.highEDisp').hide();
				$('.highGSharpDisp').hide();
				$('.highBDisp').hide();
				});

       $('.fChord').hover(function(){
				$('.lowCDisp').show();
				$('.lowFDisp').show();
				$('.lowADisp').show();
				$('.midCDisp').show();
				$('.highFDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowCDisp').hide();
				$('.lowFDisp').hide();
				$('.lowADisp').hide();
				$('.midCDisp').hide();
				$('.highFDisp').hide();
				$('.highADisp').hide();
				});

       $('.gChord').hover(function(){
				$('.lowDDisp').show();
				$('.lowGDisp').show();
				$('.lowBDisp').show();
				$('.highDDisp').show();
				$('.highGDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowDDisp').hide();
				$('.lowGDisp').hide();
				$('.lowBDisp').hide();
				$('.highDDisp').hide();
				$('.highGDisp').hide();
				$('.highBDisp').hide();
				});

 		$('.aChord').hover(function(){
				$('.lowCSharpDisp').show();
				$('.lowEDisp').show();
				$('.lowADisp').show();
				$('.midCSharpDisp').show();
				$('.highEDisp').show();
				$('.highADisp').show();

			},function(){
				$('.lowCSharpDisp').hide();
				$('.lowEDisp').hide();
				$('.lowADisp').hide();
				$('.midCSharpDisp').hide();
				$('.highEDisp').hide();
				$('.highADisp').hide();
				});

 		$('.bChord').hover(function(){
				$('.lowDSharpDisp').show();
				$('.lowFSharpDisp').show();
				$('.lowBDisp').show();
				$('.highDSharpDisp').show();
				$('.highFSharpDisp').show();
				$('.highBDisp').show();

			},function(){
				$('.lowDSharpDisp').hide();
				$('.lowFSharpDisp').hide();
				$('.lowBDisp').hide();
				$('.highDSharpDisp').hide();
				$('.highFSharpDisp').hide();
				$('.highBDisp').hide();
				});


        
    });

