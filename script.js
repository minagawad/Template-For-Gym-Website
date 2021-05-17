
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function show_all(){
    document.getElementById("img1").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img3").style.display="inline-block";
    document.getElementById("img4").style.display="inline-block";
    document.getElementById("img5").style.display="inline-block";
    document.getElementById("img6").style.display="inline-block";
    document.getElementById("img7").style.display="inline-block";
    document.getElementById("all_agllery").style.color="#f15d44";
    document.getElementById("fitness").style.color="black";
    document.getElementById("coiching").style.color="black";

   
}

function  show_fitness(){
    document.getElementById("img1").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("fitness").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("img").style.transition = "all 2s";
}
function  show_coiching(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img3").style.display="inline-block";
    document.getElementById("img2").style.display="inline-block";
    document.getElementById("img4").style.display="inline-block";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("coiching").style.color="#f15d44";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("event").style.color="black";
    document.getElementById("other").style.color="black";
    
    

}
function  show_event(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img5").style.display="none";
    document.getElementById("img6").style.display="none";
    document.getElementById("img7").style.display="block";
    document.getElementById("img7").style.position="relative";
    document.getElementById("img7").style.marginLeft="0%";

    document.getElementById("event").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("other").style.color="black";
   

}
function  show_others(){
    document.getElementById("img1").style.display="none";
    document.getElementById("img2").style.display="none";
    document.getElementById("img3").style.display="none";
    document.getElementById("img4").style.display="none";
    document.getElementById("img7").style.display="none";
    document.getElementById("img5").style.display="inline-block";
    document.getElementById("img6").style.display="inline-block";
    document.getElementById("other").style.color="#f15d44";
    document.getElementById("coiching").style.color="black";
    document.getElementById("all_agllery").style.color="black";
    document.getElementById("fitness").style.color="black";
    document.getElementById("event").style.color="black";

    
   

}
  
function myFunction() {
    var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
    x.className += " responsive";
   } else {
  x.className = "topnav";
  }
}

  
  function playVid() { 
    var vid = document.getElementById("myVideo"); 
    vid.play(); 
    
  } 
  
  function pauseVid() { 
    var vid = document.getElementById("myVideo");     
    vid.pause(); 
    
  } 

  var counter = 0;
  var counter2 = 0;
  var counter3 = 0;
  var counter4 = 0;
  
  var m=setInterval(function(){
    document.getElementById("count1").innerHTML = counter;
    counter++
    if (counter === 100) {
        document.getElementById("count1").innerHTML = counter;
        clearInterval(m);
    }
  }, 200);

  var m2=setInterval(function(){
    document.getElementById("count2").innerHTML = counter2;
    counter2++
    if (counter2 === 50) {
        document.getElementById("count2").innerHTML = counter2;
        clearInterval(m2);
    }
  }, 200);

  var m3=setInterval(function(){
    document.getElementById("count3").innerHTML = counter3;
    counter3++
    if (counter3 === 1000) {
        document.getElementById("count3").innerHTML = counter3;
        clearInterval(m3);
    }
  }, 50);

  var m4=setInterval(function(){
    document.getElementById("count4").innerHTML = counter4;
    counter4++
    if (counter4 === 2500) {
        document.getElementById("count4").innerHTML = counter4;
        clearInterval(m4);
    }
  }, 50);
  function change1()
  {
      document.getElementById('imgblog1').style.backgroundImage = "url('images/blog/blog-8.jpg')";
  }
  function changee1()
  {
      document.getElementById("imgblog1").style.backgroundImage="url('images/blog/blog-1.jpg')";
  }
  function change2()
  {
      document.getElementById("imgblog2").style.backgroundImage = "url('images/blog/blog-8.jpg')";
  }
  function changee2()
  {
      document.getElementById("imgblog2").style.backgroundImage = "url('images/blog/blog-2.jpg')";
  }
  function change3()
  {
      document.getElementById("imgblog3").style.backgroundImage = "url('images/blog/blog-7.jpg')";
  }
  
  function changee3()
  {
      document.getElementById("imgblog3").style.backgroundImage = "url('images/blog/2.jpg')";
  }
  
  function change4()
  {
      document.getElementById("imgblog4").style.backgroundImage = "url('images/blog/blog-6.jpg')";
  }
  function changee4()
  {
      document.getElementById("imgblog4").style.backgroundImage = "url('images/blog/blog-4.jpg')";
  }
  function change5()
  {
      document.getElementById("imgblog5").style.backgroundImage = "url('images/blog/blog-4.jpg')";
  }
  function changee5()
  {
      document.getElementById("imgblog5").style.backgroundImage = "url('images/blog/blog-5.jpg')";
  }
  function change6()
  {
      document.getElementById("imgblog6").style.backgroundImage = "url('images/blog/blog-9.jpg')";
  }
  function changee6()
  {
      document.getElementById("imgblog6").style.backgroundImage = "url('images/blog/blog-6.jpg')";
  }
  function change7()
  {
      document.getElementById("imgblog7").style.backgroundImage = "url('images/blog/blog-6.jpg')";
  }
  function changee7()
  {
      document.getElementById("imgblog7").style.backgroundImage = "url('images/blog/blog-7.jpg')";
  }
  function change8()
  {
      document.getElementById("imgblog8").style.backgroundImage = "url('images/blog/blog-6.jpg')";
  }
  function changee8()
  {
      document.getElementById("imgblog8").style.backgroundImage = "url('images/blog/blog-8.jpg')";
  }
  function change9()
  {
      document.getElementById("imgblog9").style.backgroundImage = "url('images/blog/blog-1.jpg')";
  }
  function changee9()
  {
      document.getElementById("imgblog9").style.backgroundImage = "url('images/blog/blog-9.jpg')";
  }
  
  




  function image1()
  {
      document.getElementById("imgg").style.display="inline";
      document.getElementById("imgg").style.color="blue";

  }
  function image2()
  {
      document.getElementById("imgg1").style.display="inline";
      document.getElementById("imgg1").style.color="blue";

  }
  function image3()
  {
      document.getElementById("imgg2").style.display="inline";
      document.getElementById("imgg2").style.color="blue";

  }
  function imggggg()
  {
      document.getElementById("imgggg").style.display="inline";
      document.getElementById("imgggg").style.color="red";

  }
  function imggggg1()
  {
      document.getElementById("imgggg1").style.display="inline";
      document.getElementById("imgggg1").style.color="red";

  }
  function imggggg2()
  {
      document.getElementById("imgggg2").style.display="inline";
      document.getElementById("imgggg2").style.color="red";

  }
  function image4()
  {
      document.getElementById("imggg").style.display="inline";
      document.getElementById("imggg").style.color="Orange";

  }
  function image5()
  {
      document.getElementById("imggg1").style.display="inline";
      document.getElementById("imggg1").style.color="Orange";

  }
  function image6()
  {
      document.getElementById("imggg2").style.display="inline";
      document.getElementById("imggg2").style.color="Orange";

  }
  var flag=false;
  function changeC()
  {
      if(!flag)
      document.getElementById("li1").style.color="red";
  }
  
  function changee()
  {
      document.getElementById("li1").style.color="black";
      flag=true;
      document.getElementById("li3").style.color="black";
      document.getElementById("li4").style.color="black";
      document.getElementById("li2").style.color="red";

  }
  function changee1()
  {
      document.getElementById("li1").style.color="black";
      flag=true;
      document.getElementById("li3").style.color="red";
      document.getElementById("li4").style.color="black";
      document.getElementById("li2").style.color="black";

  }
  function changee2()
  {
      document.getElementById("li1").style.color="black";
      flag=true;
      document.getElementById("li3").style.color="black";
      document.getElementById("li4").style.color="red";
      document.getElementById("li2").style.color="black";
      document.getElementById("li5").style.color="black";
      document.getElementById("li6").style.color="black";

  }
  function changee3()
  {
      document.getElementById("li1").style.color="black";
      flag=true;
      document.getElementById("li3").style.color="black";
      document.getElementById("li4").style.color="black";
      document.getElementById("li2").style.color="black";
      document.getElementById("li5").style.color="red";
      document.getElementById("li6").style.color="black";

  }
  function changee4()
  {
      document.getElementById("li1").style.color="black";
      flag=true;
      document.getElementById("li3").style.color="black";
      document.getElementById("li4").style.color="black";
      document.getElementById("li2").style.color="black";
      document.getElementById("li5").style.color="black";
      document.getElementById("li6").style.color="red";

  }