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
        january.setAttribute("style", "height:65%");
        february.setAttribute("style", "height:13%");
        march.setAttribute("style", "height:27%");
        april.setAttribute("style", "height:18%");
        januarySpan.innerHTML = "65%";
        februarySpan.innerHTML = "13%";
        marchSpan.innerHTML = "27%";
        aprilSpan.innerHTML = "18%";
    } else if (category == 0 && product == 0 && brand == 1) {
        january.setAttribute("style", "height:25%");
        february.setAttribute("style", "height:63%");
        march.setAttribute("style", "height:27%");
        april.setAttribute("style", "height:8%");
        januarySpan.innerHTML = "25%";
        februarySpan.innerHTML = "63%";
        marchSpan.innerHTML = "27%";
        aprilSpan.innerHTML = "8%";
    } else if (category == 0 && product == 1 && brand == 0) {
        january.setAttribute("style", "height:45%");
        february.setAttribute("style", "height:33%");
        march.setAttribute("style", "height:3%");
        april.setAttribute("style", "height:18%");
        januarySpan.innerHTML = "45%";
        februarySpan.innerHTML = "33%";
        marchSpan.innerHTML = "3%";
        aprilSpan.innerHTML = "18%";

    } else if (category == 0 && product == 1 && brand == 1) {
        january.setAttribute("style", "height:15%");
        february.setAttribute("style", "height:23%");
        march.setAttribute("style", "height:17%");
        april.setAttribute("style", "height:48%");
        januarySpan.innerHTML = "15%";
        februarySpan.innerHTML = "23%";
        marchSpan.innerHTML = "17%";
        aprilSpan.innerHTML = "48%";

    } else if (category == 1 && product == 0 && brand == 0) {
        january.setAttribute("style", "height:27%");
        february.setAttribute("style", "height:33%");
        march.setAttribute("style", "height:41%");
        april.setAttribute("style", "height:8%");
        januarySpan.innerHTML = "27%";
        februarySpan.innerHTML = "33%";
        marchSpan.innerHTML = "41%";
        aprilSpan.innerHTML = "8%";

    } else if (category == 1 && product == 0 && brand == 1) {
        january.setAttribute("style", "height:5%");
        february.setAttribute("style", "height:43%");
        march.setAttribute("style", "height:27%");
        april.setAttribute("style", "height:98%");
        januarySpan.innerHTML = "5%";
        februarySpan.innerHTML = "43%";
        marchSpan.innerHTML = "27%";
        aprilSpan.innerHTML = "98%";

    } else if (category == 1 && product == 1 && brand == 0) {
        january.setAttribute("style", "height:85%");
        february.setAttribute("style", "height:46%");
        march.setAttribute("style", "height:87%");
        april.setAttribute("style", "height:68%");
        januarySpan.innerHTML = "85%";
        februarySpan.innerHTML = "46%";
        marchSpan.innerHTML = "87%";
        aprilSpan.innerHTML = "68%";

    } else if (category == 1 && product == 1 && brand == 1) {
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