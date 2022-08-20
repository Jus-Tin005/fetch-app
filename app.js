/*
! fetch api = Application Programming Interface
! UI = User Interface
! XMLhttp request
! Ajax = Asynchronus javascript and XML

?            =>    request
? Client                                Server
?                  response       <=
*/

/*
! fetch api syntax = fetch(resourse,init(optinal)); = return promise
*/


/*
! solution error for data backing from server method 2
*/

const autoCompleteInputsTag = document.getElementsByClassName("autoCompleteInputs")[0];



let products;

const getUrl = "https://fakestoreapi.com/products";
// fetch(getUrl).then((response) => {     // response = object
        // const responseData = response.json();
        // console.log("Data from server :" ,responseData);   // output = Promise object
        // return responseData;
// }).then((productsDataFromServer)=>{
        // console.log("inside second then...",productsDataFromServer);
        // products = productsDataFromServer;
        // console.log("products passing from server :", products);
        // buildInputUI();  /* method 1 */
        //  autoCom/pleteInputsTag.disabled = false;  // method 2

// }).catch((error)=>{
        // console.log("error inside of catch", error);
// });


/*
! coding by asyn / await
*/

const buildAsynAwait = async () => {
        const response = await fetch(getUrl);
        const responseData = await response.json();
        const productsDataFromServer = await products;  // error in products
        autoCompleteInputsTag.disabled = false;  // method 2


}

buildAsynAwait().catch((error) => {
        console.log("Error inside of asynchronus function",error);
})





/*
! solution error for data backing from server method 1.(asynchronus programming)
*/
       /*  const buildInputUI = () => {


                        const autoCompleteInputsTag = document.getElementsByClassName("autoCompleteInputs")[0];
                        const resultContainersTag = document.getElementsByClassName("resultContainers")[0];

                        autoCompleteInputsTag.style.display = "block"; // method 1


                        let filterProducts = [];
                        autoCompleteInputsTag.addEventListener("keyup", (e) => {
                        if(
                        e.key === "ArrowDown"        ||
                        e.key === "ArrowUp"          ||
                        e.key === "ArrowLeft"        ||
                        e.key === "ArrowRight"       ||
                        e.key === "Enter"

                        ) {
                                navigateAndSelectProduct(e.key);
                                return;
                        }
                        resultContainersTag.innerHTML = "";
                        const searchText = e.target.value.toLowerCase();
                        if(searchText.length === 0) {
                                return;
                        }
                        filterProducts = products.filter(product => {
                        return product.title.toLowerCase().includes(searchText);
                        });
                        const hasProductsToShow = filterProducts.length > 0;
                        if(hasProductsToShow) {
                                for (let i = 0; i < filterProducts.length; i++) {
                                        const productItemContainer = document.createElement("div");
                                        productItemContainer.id = filterProducts[i].id;
                                        productItemContainer.classList.add("productItemContainers");

                                        const productName = document.createElement("div");
                                        productName.classList.add("productNames");
                                        productName.append(filterProducts[i].title);

                                        const productImage = document.createElement("img");
                                        productImage.classList.add("productImages");
                                        productImage.src = filterProducts[i].image;

                                        productItemContainer.append(productName,productImage);
                                        resultContainersTag.append(productItemContainer);
                                }
                        }
                        });

                        let indexToSelect = -1;
                        const navigateAndSelectProduct = (key) => {
                                if(key === "ArrowDown") {
                                if(indexToSelect === filterProducts.length -1) {
                                indexToSelect = -1;
                                deselectProduct();
                                return;
                                }
                                        indexToSelect += 1; // -1 + 1 = 0
                                        const productItemContainerToSelect = selectProduct(indexToSelect);
                                        if(indexToSelect > 0) {
                                        deselectProduct();
                                        }
                                        productItemContainerToSelect.classList.add("selected");
                                } else if(key === "ArrowUp") {
                                if (indexToSelect === -1) {
                                return;
                                }

                                if (indexToSelect === 0) {
                                deselectProduct();
                                indexToSelect = -1;
                                return;


                                }
                                indexToSelect -= 1;
                                deselectProduct();
                                const productItemContainerToSelect = selectProduct(indexToSelect);
                                productItemContainerToSelect.classList.add("selected");

                                }else if(key === "ArrowLeft") {

                                }else if(key === "ArrowRight") {

                                }else {
                                const enterProduct = selectProduct(indexToSelect);
                                console.log('enter product',enterProduct);
                                }
                        };

                                const selectProduct = (index) => {
                                        const productIdToSelect = filterProducts[index].id.toString();
                                        const productItemContainerToSelect = document.getElementById(productIdToSelect) // notice variable
                                        productItemContainerToSelect.style.backgroundColor = "#237BFF";
                                        productItemContainerToSelect.firstChild.style.color = "#fff";
                                        return productItemContainerToSelect;
                                }

                                const deselectProduct = () => {
                                const productToDeselect = document.getElementsByClassName("selected")[0];
                                productToDeselect.style.backgroundColor = "#fff";
                                productToDeselect.firstChild.style.color = "#000";
                                productToDeselect.classList.remove("selected");
                                }


        } */









/*
! solution error for data backing from server method 2.
*/



        const resultContainersTag = document.getElementsByClassName("resultContainers")[0];



        let filterProducts = [];
        autoCompleteInputsTag.addEventListener("keyup", (e) => {

        /*
        ! method 2
        */
        /*  if(products === undefined){
                return;
         } */



        if(
        e.key === "ArrowDown"        ||
        e.key === "ArrowUp"          ||
        e.key === "ArrowLeft"        ||
        e.key === "ArrowRight"       ||
        e.key === "Enter"

        ) {
                navigateAndSelectProduct(e.key);
                return;
        }
        resultContainersTag.innerHTML = "";
        const searchText = e.target.value.toLowerCase();
        if(searchText.length === 0) {
                return;
        }
        filterProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchText);
        });
        const hasProductsToShow = filterProducts.length > 0;
        if(hasProductsToShow) {
                for (let i = 0; i < filterProducts.length; i++) {
                        const productItemContainer = document.createElement("div");
                        productItemContainer.id = filterProducts[i].id;
                        productItemContainer.classList.add("productItemContainers");

                        const productName = document.createElement("div");
                        productName.classList.add("productNames");
                        productName.append(filterProducts[i].title);

                        const productImage = document.createElement("img");
                        productImage.classList.add("productImages");
                        productImage.src = filterProducts[i].image;

                        productItemContainer.append(productName,productImage);
                        resultContainersTag.append(productItemContainer);
                }
        }
        });

        let indexToSelect = -1;
        const navigateAndSelectProduct = (key) => {
                if(key === "ArrowDown") {
                if(indexToSelect === filterProducts.length -1) {
                indexToSelect = -1;
                deselectProduct();
                return;
                }
                        indexToSelect += 1; // -1 + 1 = 0
                        const productItemContainerToSelect = selectProduct(indexToSelect);
                        if(indexToSelect > 0) {
                        deselectProduct();
                        }
                        productItemContainerToSelect.classList.add("selected");
                } else if(key === "ArrowUp") {
                if (indexToSelect === -1) {
                return;
                }

                if (indexToSelect === 0) {
                deselectProduct();
                indexToSelect = -1;
                return;


                }
                indexToSelect -= 1;
                deselectProduct();
                const productItemContainerToSelect = selectProduct(indexToSelect);
                productItemContainerToSelect.classList.add("selected");

                }else if(key === "ArrowLeft") {

                }else if(key === "ArrowRight") {

                }else {
                const enterProduct = selectProduct(indexToSelect);
                console.log('enter product',enterProduct);
                }
        };

                const selectProduct = (index) => {
                        const productIdToSelect = filterProducts[index].id.toString();
                        const productItemContainerToSelect = document.getElementById(productIdToSelect) // notice variable
                        productItemContainerToSelect.style.backgroundColor = "#237BFF";
                        productItemContainerToSelect.firstChild.style.color = "#fff";
                        return productItemContainerToSelect;
                }

                const deselectProduct = () => {
                const productToDeselect = document.getElementsByClassName("selected")[0];
                productToDeselect.style.backgroundColor = "#fff";
                productToDeselect.firstChild.style.color = "#000";
                productToDeselect.classList.remove("selected");
                }