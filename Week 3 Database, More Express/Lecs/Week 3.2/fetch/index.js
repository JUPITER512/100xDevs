document.addEventListener("DOMContentLoaded",()=>{
    let button=document.getElementById("button")
    button.addEventListener("click",async function(){
        console.log("Button Clicked")
        // alert("Button Clicked")
        const response=await fetch("https://fakerapi.it/api/v1/persons")
        const data=await response.json()
        const data1=data['data']
        for (let i=0; i<data1.length; i++){
            const firstNameNode = document.createElement("p");
            const lastNameNode = document.createElement("p");
            const emailNode = document.createElement("p");
            const breakline = document.createElement("br");
            const heading = document.createElement("h2");
            firstNameNode.textContent = "First Name: " + data1[i]["firstname"];
            lastNameNode.textContent = "Last Name: " + data1[i]["lastname"];
            emailNode.textContent = "Email: " + data1[i]["email"];
            heading.textContent = "User " + (i+1) +" data" 
            document.body.appendChild(heading);
            document.body.appendChild(firstNameNode);
            document.body.appendChild(lastNameNode);
            document.body.appendChild(emailNode);
            document.body.appendChild(breakline);
            
        }
    })
})