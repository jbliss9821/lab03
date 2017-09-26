function change_rgb()
{
    var red = document.getElementById('r').value;
    var green = document.getElementById('g').value;
    var blue = document.getElementById('b').value;
    
    document.getElementById('p1').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function change_w()
{
    var red = document.getElementById('border_r').value;
    var green = document.getElementById('border_g').value;
    var blue = document.getElementById('border_b').value;
    
    document.getElementById('p1').style.borderColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    var width = document.getElementById('w').value;
    document.getElementById('p1').style.borderWidth = width;
}

function reset()
{
    document.getElementById('p1').style.backgroundColor = "white";
    
    document.getElementById('r').value = "255";
    document.getElementById('g').value = "255";
    document.getElementById('b').value = "255";
    
    document.getElementById('p1').style.borderColor = "black";
    
    document.getElementById('p1').style.borderWidth = "3px";
    
    document.getElementById('border_r').value = "0";
    document.getElementById('border_g').value = "0";
    document.getElementById('border_b').value = "0";
}