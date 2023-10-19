const textarea = document.querySelector(".text-area"); 
const char_element = document.querySelector(".char-number"); 
const twitter_element = document.querySelector(".twitter-number");
const insta_element = document.querySelector(".Instagram-number");
const word_element=document.querySelector(".word-number");

const twitter_char_limit = 280;  
const insta_char_limit = 160;   

// change the color function
const colorChange =(name,count)=>{
if(name==="twitter"){
    if(count>280){
        twitter_element.classList.add("change-color");
    }else{
        twitter_element.classList.remove("change-color");
    }
}else{
    if(count>160){
        insta_element.classList.add("change-color");
    }else{
        insta_element.classList.remove("change-color");
    }
}
    
}

// Character count function
const charCounter = (e) => {
  console.log(e);
  char_element.innerText = e.target.value.length;
};

// words function 
const wordCounter = (e) => {
    let str = e.target.value;
    // Most important line learn and understand properly 
    str = str.trim().split(/\s+/).filter(word => word !== '');
    console.log(str);
    word_element.innerText = str.length;
  };

// Twitter Function
const twitterCounter=(e) =>{
    twitter_element.innerText = twitter_char_limit - e.target.value.length;
    colorChange("twitter",e.target.value.length);
}

// Insta Function
const instaCounter=(e) =>{
    insta_element.innerText = insta_char_limit - e.target.value.length;
    colorChange("instagram",e.target.value.length);
}


// Main function
textarea.addEventListener("input", (e) => {
  charCounter(e);
  twitterCounter(e);
  instaCounter(e);
  wordCounter(e);
});
