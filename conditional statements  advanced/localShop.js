function localShop(input) {
    const product = input[0];
    const town = input[1];
    const quantity = Number(input[2]);
    
    let price = 0;

 switch (town) {
     case "Varna":
         switch (product) {
             case "coffee": price = quantity * 0.45; break;
             case "water" : price = quantity * 0.7; break;
             case "beer"  : price = quantity * 1.1; break;
             case "sweets": price = quantity * 1.35; break;
            case "peanuts": price = quantity * 1.55; break;
    }
        break;
       case "Plovdiv":
           switch (product) {
               case "coffee": price = quantity * 0.4; break;
               case "water" : price = quantity * 0.7; break;
               case "beer"  : price = quantity * 1.15; break;
               case "sweets": price = quantity * 1.3; break;
               case "peanuts": price = quantity * 1.5; break;
           }
           break;
        case "Sofia":
            switch (product) {
                case "coffee": price = quantity * 0.5; break;
                case "water" : price = quantity * 0.8; break;
                case "beer"  : price = quantity * 1.2; break;
                case "sweets": price = quantity * 1.45; break;
                case "peanuts": price = quantity * 1.6; break;
            }
 }
    
    console.log(price);
    

}

localShop(["coffee","Varna",2]);
localShop(["peanuts","Plovdiv",1]);
localShop(["beer","Sofia",6]);
localShop(["water","Plovdiv",3]);
localShop(["sweets","Sofia",2.23]);




