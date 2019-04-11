var Player1=prompt("Enter the Name of Player 1");
var Player2=prompt("Enter the Name of Player 2");
var Token=confirm(Player1+",Do you want to select 'O'?");
var P1Tag,P2Tag,Count=0;
if(Token===true)
{
	P1Tag="O";
	P2Tag="X";
}
else
{
	P1Tag="X";
	P2Tag="O";
} 
alert("Player 1 Tag:"+P1Tag+" Player 2 Tag:"+P2Tag);
var Chance=true;
var box=document.getElementsByClassName("box");

function CheckChance(i)
{
	if(Chance===true&&box[i].innerText!=P1Tag&&box[i].innerText!=P2Tag)
			{
				box[i].innerText=P1Tag;
				Chance=false;
				Count++;
			}
	else if(box[i].innerText!=P1Tag&&box[i].innerText!=P2Tag)
			{
				box[i].innerText=P2Tag;
				Chance=true;
				Count++;
			}
	CheckWin();			
}

function CheckWin()
{
	for(var j=0;j<=6;j=j+3)
	{
		if(box[j].innerText===P1Tag &&box[j+1].innerText===P1Tag &&box[j+2].innerText===P1Tag)
		{
			box[j].style.background=box[j+1].style.background=box[j+2].style.background="green";
			alert(Player1+" Won");
			return;
		}
		else if(box[j].innerText===P2Tag &&box[j+1].innerText===P2Tag &&box[j+2].innerText===P2Tag )
		{
			box[j].style.background=box[j+1].style.background=box[j+2].style.background="green";
			alert(Player2+" Won");
			return;
		}	
	}
	for(var j=0;j<=3;j++)
	{
		if(box[j].innerText===P1Tag &&box[j+3].innerText===P1Tag &&box[j+6].innerText===P1Tag)
		{
			box[j].style.background=box[j+3].style.background=box[j+6].style.background="green";
			alert(Player1+" Won");
			return;
		}
		else if(box[j].innerText===P2Tag &&box[j+3].innerText===P2Tag &&box[j+6].innerText===P2Tag)
		{
			box[j].style.background=box[j+3].style.background=box[j+6].style.background="green";
			alert(Player2+" Won");
			return;	
		}
	}
	
	 if(box[0].innerText===P1Tag &&box[4].innerText===P1Tag &&box[8].innerText===P1Tag)
	{
		box[0].style.background=box[4].style.background=box[8].style.background="green";
		alert(Player1+" Won");
		return;
	}
	else if(box[2].innerText===P1Tag &&box[4].innerText===P1Tag &&box[6].innerText===P1Tag)
	{
		box[2].style.background=box[4].style.background=box[6].style.background="green";
		alert(Player1+" Won");
		return;
	}
	else if(box[0].innerText===P2Tag &&box[4].innerText===P2Tag &&box[8].innerText===P2Tag)
	{
		box[0].style.background=box[4].style.background=box[8].style.background="green";			
		alert(Player2+" Won");
		return;
	}
	else if(box[2].innerText===P2Tag &&box[4].innerText===P2Tag &&box[6].innerText===P2Tag)
	{
		box[2].style.background=box[4].style.background=box[6].style.background="green";
		alert(Player2+" Won");
		return;
	}
	
	if(Count>=9)
	{
		Token=prompt("Game Over!!!It was a tie.Click Ok to Play Again");
		if(Token===true)
		{
			location.reload(false);
		}
		else
		{
			alert("Thanks for Playing");
			return;
		}
	}
	
}