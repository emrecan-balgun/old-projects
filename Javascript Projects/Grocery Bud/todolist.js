// sabit kısım
const formBoxDOM = document.querySelector('#formBox') //hepsi buna eklenecek
const newValueDOM = document.querySelector('#newData')
const submitButtonDOM = document.querySelector('#submit')
const alertDOM = document.querySelector('#alert')



submitButtonDOM.addEventListener('click', () => {
    alertDOM.innerHTML = "item added to the list"
    alertDOM.classList.add('alert-success', 'alertMessage')
    setTimeout(function() {
        alertDOM.innerHTML='';
        alertDOM.classList.remove('alert-success', 'alertMessage')
    },2000);

    // tekrarlanacak kısım
    const elementDiv = document.createElement('div')
    elementDiv.classList.add('text-center', 'ms-3', 'me-3')

    formBoxDOM.appendChild(elementDiv)

    const elementAttrDiv = document.createElement('div')
    elementAttrDiv.classList.add('input-group', 'rounded')
    elementAttrDiv.setAttribute('id','newValue')

    elementDiv.appendChild(elementAttrDiv)

    // Input Text kısmı
    const inputText = document.createElement('input')
    inputText.setAttribute('type', 'text')
    inputText.classList.add('form-control', 'border-0')
    inputText.setAttribute('id','inputText')
    inputText.setAttribute('value', `${newValueDOM.value}`)
    inputText.disabled = true;

    // Button kısmı
    const editButton = document.createElement('button')
    editButton.classList.add('btn')
    editButton.setAttribute('type', 'button')
    editButton.setAttribute('id','editButton')
    editButton.innerHTML = `<i class="fas fa-edit" id="edit" style="color: green;"></i>`

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn')
    deleteButton.setAttribute('type', 'button')
    deleteButton.setAttribute('id','deleteButton')
    deleteButton.innerHTML = `<i class="fas fa-trash" id="remove" style="color: red;"></i>`

    // elementAttrDiv'e form kontrol ogelerini ekle
    elementAttrDiv.appendChild(inputText)
    elementAttrDiv.appendChild(editButton)
    elementAttrDiv.appendChild(deleteButton)

    newValueDOM.value = ""

    // Buton fonksiyonları
    editButton.addEventListener('click', () => {
        let edit = document.querySelector('#edit');

        if(inputText.disabled == true) {
            inputText.disabled = false;
            edit.classList.remove('fa-edit')
            edit.classList.add('fa-save')
        } else {
            edit.classList.add('fa-edit')
            edit.classList.remove('fa-save')
            inputText.disabled = true;
        }
    })

    deleteButton.addEventListener('click', () => {
        let remove = document.querySelector('#remove');
        elementDiv.remove();
        alertDOM.innerHTML = "item removed to the list"
        alertDOM.classList.add('alert-danger', 'alertMessage')
        setTimeout(function() {
            alertDOM.innerHTML='';
            alertDOM.classList.remove('alert-danger', 'alertMessage')
        },2000);
    })   

    clearAllItems.style.display = "block";
});