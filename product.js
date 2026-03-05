let doc=document.getElementById("product-data");
let statement="";

async function fetchData() {
    try{
        let response=await fetch("https://fakestoreapi.com/products");
        let data=await response.json();
        console.log(data);
        statement = data.map((value)=>{
            console.log("i have code",value);
           return `
            <div class="product">
                <img src='${value.image}' >
               
            </div>
            `;
        });

        doc.innerHTML=statement;

    }catch(error){
        console.log("error statement",error)
    }
    
}
fetchData();