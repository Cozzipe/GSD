/*window.onresize = function WindowSize()
{
  var jb = document.getElementById("testo");

  if (innerWidth<500)
  {
    jb.fontsize.value="20";
  }
  else
  {
    jb.fontsize.value="50";
  }
}
*/

var flag=1;

function carousel()
{
  img1 = document.getElementById("carosello1");
  img2 = document.getElementById("carosello2");

  switch (flag)
  {
    case 1:
      img1.style.display="block";
      img2.style.display="none";
      break;

    case 2:
      img1.style.display="none";
      img2.style.display="block";
      break;
  }
}

function piuCarosello()
{
  if(flag<2)
  {
    flag=flag+1;
  }
  carousel();
}

function menoCarosello()
{
  if(flag>1)
  {
    flag=flag-1;
  }
  carousel();
}
