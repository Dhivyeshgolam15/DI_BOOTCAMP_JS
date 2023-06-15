fetchCurrencise();
document.querySelector("#convert").addEventListener("click",handleClick)

function fetchCurrencise() {
    const url = "https://v6.exchangerate-api.com/v6/f4b589c0d0506d42a7150c08/codes";
    fetch(url)
     .then((res) => res.json())
     .then((res) => populateDropdown(res.supported_codes))
     .catch((error) => console.error(error));
}
function populateDropdown(codes){
    console.log("codes:",codes)
    const entries = object.entries(codes);

        for (const entry of entries ){

        const [code, name] = entry;
        const option = document.createElement("option");
        option.innerText = name
        option.value = code
        document.getElementById("From").appendChild(option);
        document.getElementById("To").appendChild(option2);
        }

    }
    function handleClick(){
        const from = document.getElementById("From").value;
        const to = document.getElementById("To").value;
        const amount = document.getElementById("amount").value;
        const result = document.getElementById("result");
        result.innerHTML = amount * to / from;
    }
