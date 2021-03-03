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
    }else if(category == 0 && product == 1 && brand == 0) {
        january.setAttribute("style", "height:55%");
        february.setAttribute("style", "height:33%");
        march.setAttribute("style", "height:3%");
        april.setAttribute("style", "height:48%");
        januarySpan.innerHTML = "55%";
        februarySpan.innerHTML = "33%";
        marchSpan.innerHTML = "3%";
        aprilSpan.innerHTML = "48%";

    }
    else if(category == 0 && product == 1 && brand == 1) {
        january.setAttribute("style", "height:15%");
        february.setAttribute("style", "height:13%");
        march.setAttribute("style", "height:17%");
        april.setAttribute("style", "height:48%");
        januarySpan.innerHTML = "15%";
        februarySpan.innerHTML = "13%";
        marchSpan.innerHTML = "17%";
        aprilSpan.innerHTML = "48%";

    }
    else if(category == 1 && product == 0 && brand == 0) {
        january.setAttribute("style", "height:27%");
        february.setAttribute("style", "height:33%");
        march.setAttribute("style", "height:31%");
        april.setAttribute("style", "height:8%");
        januarySpan.innerHTML = "27%";
        februarySpan.innerHTML = "33%";
        marchSpan.innerHTML = "31%";
        aprilSpan.innerHTML = "8%";

    }
    else if(category == 1 && product == 0 && brand == 1) {
        january.setAttribute("style", "height:5%");
        february.setAttribute("style", "height:43%");
        march.setAttribute("style", "height:47%");
        april.setAttribute("style", "height:78%");
        januarySpan.innerHTML = "5%";
        februarySpan.innerHTML = "43%";
        marchSpan.innerHTML = "47%";
        aprilSpan.innerHTML = "78%";

    }
    else if(category == 1 && product == 1 && brand == 0) {
        january.setAttribute("style", "height:85%");
        february.setAttribute("style", "height:83%");
        march.setAttribute("style", "height:87%");
        april.setAttribute("style", "height:68%");
        januarySpan.innerHTML = "85%";
        februarySpan.innerHTML = "83%";
        marchSpan.innerHTML = "87%";
        aprilSpan.innerHTML = "68%";

    }
    else if(category == 1 && product == 1 && brand == 1) {
        january.setAttribute("style", "height:76%");
        february.setAttribute("style", "height:56%");
        march.setAttribute("style", "height:34%");
        april.setAttribute("style", "height:21%");
        januarySpan.innerHTML = "76%";
        februarySpan.innerHTML = "56%";
        marchSpan.innerHTML = "34%";
        aprilSpan.innerHTML = "21%";
    }
}