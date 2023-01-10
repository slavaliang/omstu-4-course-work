var uploaded_file = document.getElementById('image')

let upload = document.getElementById("form");

//действия при нажатии на кнопку
upload.addEventListener("submit", async (event) => {
  event.preventDefault();  //отмена действия по умолчанию в случае чего
  var fileList = uploaded_file.files;
  console.log(fileList);

  var formdata = new FormData();
  formdata.append("image",fileList[0]);
  
  // body parser middleware
  try {
    await fetch("http://localhost:3000/upload",{method:"POST",body:formdata}).then(function(response) {
        return response.json();
    })
  } catch (error) {
    
  }
});  