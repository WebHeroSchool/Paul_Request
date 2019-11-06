let url =  https://api.github.com/users=праороапроапж;

let getUserName = (url) => {
  let getName = url.split("=");
  let logName = getName[1];  
  if (logName == undefined){
    logName = "PaulinaLyu";
  }
   return logName;
}

let logName = getUserName(url);
fetch(`https://api.github.com/users/${logName}`)
  .then(res => res.json())
  .then(json => {
    avatar = json.avatar_url;
    name = json.name;
    bio = json.bio;
    url = json.url;
    if (name) {
      let modifyName = () => {
        let userName = document.getElementsByTagName("h1");
        userName[0].innerHTML = name;
      }
      let modifyBio = () => {
        let userBio = document.getElementById("bio");
        userBio.innerHTML = bio;
      }
      let modifyAvatar = () => {
        let userAvatar = document.getElementsByTagName("img");
        userAvatar[0].src = avatar;
        userAvatar[0].alt = "Avatar";
      }
      let modifyUrl = () => {
        let userUrl = document.getElementById("url");
        userUrl.href = `https://github.com/${logName}`;
      }
      modifyName();
      modifyBio();
      modifyAvatar();
      modifyUrl();
    } else {
      alert("Профиль не найден");
    }
    
  })
  .catch(err => document.write(err + "Информация о пользователе не доступна"));

  
 




   

   
