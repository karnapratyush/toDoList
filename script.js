let toDoInp=$('#toDoInp')
let btnAdd=$("#btnAdd")
let btnReset=$('#btnReset')
let ulElements=$('#ulElements')
let btnClear=$('#btnClear')
let btnSort=$('#btnSort')

colorArray=['list-group-item list-group-item-primary ','list-group-item list-group-item-secondary',
            'list-group-item list-group-item-danger','list-group-item list-group-item-success','list-group-item list-group-item-dark'
            ,'list-group-item list-group-item-info','list-group-item list-group-item-warning']





            
function addItem()
{
    
    if (toDoInp.val()!="")
    
    {
        randomColor=colorArray[Math.floor(Math.random() * colorArray.length)];
        let listItem=$('<li>',{
            'class':randomColor,text:toDoInp.val()
        })
        
        ulElements.append(listItem)
        toDoInp.val('')

        listItem.click((event)=>{
            // console.log(event.target)
            $(event.target).toggleClass('strike')
            
            

        })
    }
}

toDoInp.keypress((event)=>{
    if(event.which==13)
    {
        addItem();
    }
})
btnAdd.click(addItem
)

btnReset.click(()=>{
    toDoInp.val('')
})

function sortTask()
{
    $('#ulElements .strike').appendTo(ulElements)
}
function delItem(){
    $('#ulElements .strike').remove()
}


btnClear.click(delItem)

btnSort.click(sortTask)