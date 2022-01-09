var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg", "https://th.bing.com/th/id/R.0f33a1ff33827e62afc01e37d7b5144a?rik=ignRmeV%2fDnICag&riu=http%3a%2f%2f1.bp.blogspot.com%2f-ceVkHGnowgQ%2fT3BSry8ON2I%2fAAAAAAAABb4%2fWok_jO66wlc%2fs1600%2foscar002.gif&ehk=NcVxkjy%2bLoxKe4ZYwyqTd%2bUeX6E3JyEQg9T6Gg2MvQ0%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1", "https://th.bing.com/th/id/R.d3d0bf37eeb3840197c02ab0b247e4c6?rik=gHmD8htuy5Hivg&riu=http%3a%2f%2fimages.clipartpanda.com%2fguy-clipart-little_guy_in_suit_2.png&ehk=kfJpVWu7vQNbBaUAGtrtcof1MIN4CvrHe4zkZP9hjGQ%3d&risl=&pid=ImgRaw&r=0", "https://i.pinimg.com/736x/d6/ec/81/d6ec81aa6d783cb56923ac74868702b3.jpg" , "https://i.pinimg.com/236x/c9/9e/82/c99e82bfb22e9f430d7f76ae5c825063--scrap-books-mother-and-child.jpg" , "https://webstockreview.net/images/grandpa-clipart-brown-4.jpg"];
var names = ["Family Book","Oshan Indika", "Thevin Sembukuttiarachchi", "Ruhara Sembukuttiarachchi", "Shashika Wijesekera", "Karuna Wijesekera"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
