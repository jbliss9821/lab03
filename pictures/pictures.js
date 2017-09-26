var cur_card;
var cards = [];
cards[0] = "cartman.jpg";
cards[1] = "stan.jpg";
cards[2] = "kyle.jpg";
cards[4] = "kenny.jpg";
cards[3] = "butters.png";

function first_pic()
{
    cur_card = cards[0];
}

function prev_pic()
{   
	if (cur_card == cards[0])
	{
		cur_card = cards[4];
	}
	else if (cur_card == cards[4])
	{
		cur_card = cards[3];
	}
	else if (cur_card == cards[3])
	{
		cur_card = cards[2];
	}
    else if (cur_card == cards[2])
    {
        cur_card = cards[1];
    }
    else 
    {
        cur_card = cards[0];
    }
	document.getElementById('card').src = cur_card;
}

function next_pic()
{
    	if (cur_card == cards[0])
	{
		cur_card = cards[1];
	}
	else if (cur_card == cards[1])
	{
		cur_card = cards[2];
	}
	else if (cur_card == cards[2])
	{
		cur_card = cards[3];
	}
    else if (cur_card == cards[3])
    {
        cur_card = cards[4];
    }
    else 
    {
        cur_card = cards[0];
    }
	document.getElementById('card').src = cur_card;
}









