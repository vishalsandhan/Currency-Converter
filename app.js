const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";


const dropdowns =document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button");
let from_curr=document.querySelector("#sel1");
let to_curr=document.querySelector("#sel2");
const msg = document.querySelector(".msg")

// Adding options in the select tag from countryList
for(let select of dropdowns)
    {
        for(code in countryList){
            let newOption = document.createElement("option");
            newOption.innerText = code;
            newOption.value = code;
            if(select.name === "from" && code==="USD")
                {
                    newOption.selected="selected";
                }else if(select.getAttribute("name") === "to" && code==="INR"){
                    newOption.selected="selected";
                }

            select.append(newOption);
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target)
        });
    };

    
    const updateExchangeRate = async ()=>{
        
        let amount=document.querySelector(".amount input");
        let amtval = amount.value;
        if(amtval === "" || amtval < 1){
            amtval = 1;
            amount.value = "1";
        }


        const url = `${base_url}${from_curr.value.toLowerCase()}.json`;
        let response1 = await (await fetch(url)).json();

        let rate = response1[from_curr.value.toLowerCase()][to_curr.value.toLowerCase()];

        let final_amt = rate * amtval;
        msg.innerText=`${amtval} ${from_curr.value} = ${final_amt} ${to_curr.value}`;
    };

    const updateFlag = (element) => {
        let currcode = element.value;
        let countrycode = countryList[currcode];
        let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src=newsrc;
    };

    btn.addEventListener("click",(evt)=>{
        evt.preventDefault();
        updateExchangeRate();
    });

    window.addEventListener("load",()=>{
        updateExchangeRate();
    })