let button01 = document.querySelector('.button01')
let current = "off"
button01.addEventListener('click', function () {
    if (current == "off") {
        button01.style.backgroundImage = "url('./IconFan05On.png')"
        current = "on"
    } else {
        button01.style.backgroundImage = "url('./IconFan05Off.png')"
        current = "off"
    }

    // 

    const loadNum = button01.getAttribute("data-load-num");
    const loadStatus = button01.getAttribute("data-load-status");

    const url = "https://mhw4tdxdjyofllxw7yyjnvxytq0sbftl.lambda-url.ap-south-1.on.aws/?load_num=${loadNum}&load_status=${loadStatus}";
    // https://mhw4tdxdjyofllxw7yyjnvxytq0sbftl.lambda-url.ap-south-1.on.aws/?load_num=1&load_status=0";
    fetch(url, {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Response:", data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });


    // 
})