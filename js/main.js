let click_btn = document.querySelector("#btn");

click_btn.addEventListener("click", ()=>{
    let user_input = parseInt(document.querySelector("#user-input").value);

    function hotel_bill(total_days){
        if(total_days < 11){
            let primary_bill = total_days * 100;
             return primary_bill;
        }

        else if(total_days < 21){
            let days = total_days-10;
            let without_discount = 10*100;
            let discount_bill = days * 80;
            return without_discount + discount_bill;
        }

        else if(total_days > 20){
            let days2 = total_days -10;
            let without_discount_2 = 10*100;
            let with_discount_20pers = days2 - 10;
            discount_bill_2 = 10*80;
            let with_discount_50pers =  with_discount_20pers * 50;

            return without_discount_2 + discount_bill_2 + with_discount_50pers;

        }
    }


    let result = document.querySelector(".result");
    result.innerHTML = "Your Total Price : " + hotel_bill(user_input) + "TK";


    
})

