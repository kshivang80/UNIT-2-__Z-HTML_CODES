var data = [
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
]

data.map(function(elem){
    var box=document.createElement("div");
    
    var photo=document.createElement("img")
    photo.setAttribute("src",elem.imgUrl)
    
    var Name=document.createElement("h3")
    Name.innerText=elem.name
    
    var Price=document.createElement("h3")
    Price.innerText=elem.price
    
    var striked=document.createElement("h4")
    striked.innerText=elem.strikedOffPrice
    // data.map(function(elem){
    //     var box=document.createElement("div");
    //     var striked=document.createElement("h4")
    //     striked.innerText=elem.strikedOffPrice
    // })
    
    
    box.append(photo,Name,Price,striked)
    document.querySelector("#container").append(box)
    
     });