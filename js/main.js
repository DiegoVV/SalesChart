function change() {
    let categoryOptions = document.getElementById("category");
    let category = categoryOptions.options[categoryOptions.selectedIndex].value;
    let productOptions = document.getElementById("product");
    let product = productOptions.options[productOptions.selectedIndex].value;
    let brandOptions = document.getElementById("brand");
    let brand = brandOptions.options[brandOptions.selectedIndex].value;

    let january = document.getElementById("january");
    let february = document.getElementById("february");
    let march = document.getElementById("march");
    let april = document.getElementById("april");

    let januarySpan = document.getElementById("januarySpan");
    let februarySpan = document.getElementById("februarySpan");
    let marchSpan = document.getElementById("marchSpan");
    let aprilSpan = document.getElementById("aprilSpan");
    if (category == 0 && product == 0 && brand == 0) {
        january.setAttribute("style", "height:85%");
        february.setAttribute("style", "height:23%");
        march.setAttribute("style", "height:7%");
        april.setAttribute("style", "height:38%");
        januarySpan.innerHTML = "85%";
        februarySpan.innerHTML = "25%";
        marchSpan.innerHTML = "7%";
        aprilSpan.innerHTML = "38%";
    }
    else if(category == 0 && product == 0 && brand == 1) {
        january.setAttribute("style", "height:25%");
        february.setAttribute("style", "height:53%");
        march.setAttribute("style", "height:37%");
        april.setAttribute("style", "height:18%");
        januarySpan.innerHTML = "25%";
        februarySpan.innerHTML = "53%";
        marchSpan.innerHTML = "37%";
        aprilSpan.innerHTML = "18%";
    }
}