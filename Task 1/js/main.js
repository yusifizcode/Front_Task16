let visitCount = localStorage.getItem('visitCount');

let besketBtn = document.getElementById('shopping')

let sidebar = document.getElementById('sidebar');

let closebtn = document.querySelector('.fa-xmark')
//let deletebttn;

let span;
let img;
let icon;
let v =true;


function BasketItem(id, count) {
    this.Id = id;
    this.Count = count;
}

if (!visitCount) {
    visitCount = 0;
}

visitCount++;

localStorage.setItem('visitCount', visitCount)

let btns = document.querySelectorAll('.card .btn');


let basketStr = localStorage.getItem('basket');

let basketItems;
if (!basketStr) {
    basketItems = [];
}
else {
    basketItems = JSON.parse(basketStr);
}
document.querySelector('.basket .item-count').innerText = basketItems.length;



    basketItems.forEach(el=>{
        if(el){
        let k = el.Id
            let sidediv = document.createElement('div')
            let sideDivId = document.createAttribute('data-id')
            sideDivId.value = k
            console.log(sidediv);
            sidediv.setAttributeNode(sideDivId)
        
        
        //console.log(v);
        let sideSpan = document.createElement('span')
        let sideImg = document.createElement('img');
        let sideIcon = document.createElement('i');
        sideIcon.classList.add('fa-solid')
        sideIcon.classList.add('fa-ban')
        sideIcon.classList.add('delete')
        sideImg.classList.add('sideimg')
        sideSpan.classList.add('sidespan')
        let imgSrc = document.createAttribute('src')
        sideImg.setAttributeNode(imgSrc)
        let card =document.querySelectorAll(".card")
        let m;
        card.forEach(cardEl=>{
            let n = cardEl.getAttribute('data-id')
            if(n==k){
                m=cardEl
            }
        
        })
        let sideDataId = m;
        let imgDiv = sideDataId.children[0]
        console.log(imgDiv.src)
        imgSrc.value = imgDiv.src
        sideSpan.innerText = 'Count:' + ' ' + el.Count
        sidediv.appendChild(sideImg)
        sidediv.appendChild(sideSpan)
        sidediv.appendChild(sideIcon)
        sidebar.appendChild(sidediv)
        
        
        }
        
        })



btns.forEach(el => {
    
    el.addEventListener('click', function (e) {
        location.reload();
        let a = document.querySelectorAll('#sidebar div')

        let dataId = el.parentNode.parentNode.getAttribute('data-id');
        let item = basketItems.find(x => x.Id == dataId);

        if (item) {
            item.Count++;
        }
        else {
            item = new BasketItem(dataId, 1);
            basketItems.push(item);
        }

        document.querySelector('.basket .item-count').innerText = basketItems.length;

        localStorage.setItem('basket', JSON.stringify(basketItems))
        for(let i=0 ; i<a.length; i++){
      
            let divtest =a[i].getAttribute('data-id')
              if(divtest==dataId){
                  v= false;
                  a[i].children[1].innerText='Count:' + ' ' + item.Count
                  break;
              }
              else{
                  v=true;
              }

        }
        console.log(v)
       if(v==true){
           let div = document.createElement('div')
            let divid = document.createAttribute('data-id')
            divid.value = dataId
            console.log(div);
            div.setAttributeNode(divid)
        

        console.log(v);
        span = document.createElement('span')
        img = document.createElement('img');
        icon = document.createElement('i');
        icon.classList.add('fa-solid')
        icon.classList.add('fa-ban')
        icon.classList.add('delete')
        img.classList.add('sideimg')
        span.classList.add('sidespan')
        let imgatr = document.createAttribute('src')
        img.setAttributeNode(imgatr)
        let dataIds = el.parentNode.parentNode
        let imgssss = dataIds.children[0]
        console.log(imgssss.src)
        imgatr.value = imgssss.src
        span.innerText = 'Count:' + ' ' + item.Count
        div.appendChild(img)
        div.appendChild(span)
        div.appendChild(icon)
        sidebar.appendChild(div)
    }
    
    // let deletebttn = document.querySelectorAll('.delete')
    // deletebttn.forEach(dele=>{
    //     dele.addEventListener('click', function () {
            
    //         let h = dele.parentNode.getAttribute('data-id')
    //         let delitem = basketItems.find(x => x.Id == h)
    //         let index = basketItems.indexOf(delitem);
    //         basketItems.splice(index,1)
    
    //         document.querySelector('.basket .item-count').innerText = basketItems.length;
    //         localStorage.setItem('basket', JSON.stringify(basketItems))
    //         dele.parentNode.remove();
    //         delitem.value= "";
    //     })
    // })
   
    })
})
 

//console.log(deletebttn)


let deletebttn = document.querySelectorAll('.delete')
        deletebttn.forEach(dele=>{
            dele.addEventListener('click', function () {
                
                let h = dele.parentNode.getAttribute('data-id')
                let delitem = basketItems.find(x => x.Id == h)
                let index = basketItems.indexOf(delitem);
                basketItems.splice(index,1)
        
                document.querySelector('.basket .item-count').innerText = basketItems.length;
                localStorage.setItem('basket', JSON.stringify(basketItems))
                dele.parentNode.remove();
                delitem.value= "";
            })
        })
console.log(visitCount)


besketBtn.addEventListener('click', function () {

    sidebar.style.left = '0'
})
closebtn.addEventListener('click', function () {

    sidebar.style.left = '-700px'
})


